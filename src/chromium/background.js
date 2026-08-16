// 核心修复：不要拦截空 URL，只精准打击真正的 newtab 页面
function isNewTabUrl(url) {
  if (!url) return false; 
  const lowerUrl = url.toLowerCase();
  return lowerUrl.startsWith('chrome://newtab') || 
         lowerUrl.startsWith('edge://newtab');
}

function rebuildRelations() {
  chrome.tabs.query({}, (tabs) => {
    let initialRelations = {};
    tabs.forEach(tab => {
      const tabUrl = tab.pendingUrl || tab.url || "";
      if (tab.openerTabId && !isNewTabUrl(tabUrl)) {
        initialRelations[tab.id] = tab.openerTabId;
      }
    });
    chrome.storage.local.set({ tabRelations: initialRelations });
  });
}

chrome.runtime.onInstalled.addListener(rebuildRelations);
chrome.runtime.onStartup.addListener(rebuildRelations);

chrome.tabs.onCreated.addListener((tab) => {
  const tabUrl = tab.pendingUrl || tab.url || "";
  if (tab.openerTabId && !isNewTabUrl(tabUrl)) {
    chrome.storage.local.get(['tabRelations'], (result) => {
      let tabRelations = result.tabRelations || {};
      tabRelations[tab.id] = tab.openerTabId;
      chrome.storage.local.set({ tabRelations });
    });
  }
});

// 动态拦截：如果某个没加载完的网页加载出来后发现是个空白标签页，立刻解除关系
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && isNewTabUrl(changeInfo.url)) {
    chrome.storage.local.get(['tabRelations'], (result) => {
      let tabRelations = result.tabRelations || {};
      if (tabRelations[tabId] !== undefined) {
        delete tabRelations[tabId];
        chrome.storage.local.set({ tabRelations });
      }
    });
  }
});

chrome.tabs.onRemoved.addListener((closedTabId) => {
  chrome.storage.local.get(['tabRelations'], (result) => {
    let tabRelations = result.tabRelations || {};
    let parentId = tabRelations[closedTabId];
    let changed = false;

    for (let childId in tabRelations) {
      if (tabRelations[childId] === closedTabId) {
        if (parentId) {
          tabRelations[childId] = parentId; 
        } else {
          delete tabRelations[childId]; 
        }
        changed = true;
      }
    }

    if (tabRelations[closedTabId] !== undefined) {
      delete tabRelations[closedTabId];
      changed = true;
    }

    if (changed) {
      chrome.storage.local.set({ tabRelations });
    }
  });
});