// ==================== Chromium 兼容 Polyfill ====================
if (typeof browser === "undefined") {
  globalThis.browser = chrome;
}

// 通过 UserAgent 嗅探当前宿主引擎
const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
// ==================== 原生轻量国际化 (i18n) 引擎 ====================
const lang = navigator.language.startsWith('zh') ? 'zh' : 'en';

const i18n = {
  zh: {
    title: "标签页脉络",
    standaloneBtn: "↗ 独立窗口",
    viewList: "所有列表",
    viewTree: "关系树面板",
    viewKeywords: "关键词",
    viewDonateBtn: "支持开发者",
    searchPlaceholder: "正则搜索标题或 URL (如: github|FreeBSD)...",
    searchClear: "清除关键词",
    matchUrlOff: "仅匹配链接 (默认关闭)",
    matchUrlOn: "仅匹配链接 (已开启)",
    sortTimeOff: "按最近访问时间排序",
    sortTimeOn: "以正常顺序排序",
    loading: "加载中...",
    locateBtn: "定位",
    locateTitle: "定位到当前标签页",
    exportBtn: "导出",
    exportTitle: "仅导出列表中当前匹配的项目",
    importBtn: "导入",
    importTitle: "导入 JSON 并静默恢复标签页",
    expandAll: "展开全部",
    collapseAll: "折叠全部",
    keywordHint: "", 
    extractingBg: "⏳ 正在后台提取...",
    treeHeader: "标签页层级结构",
    justNow: "刚刚",
    secondsAgo: " 秒前",
    minutesAgo: " 分钟前",
    hoursAgo: " 小时前",
    daysAgo: " 天前",
    unknown: "未知",
    totalTabs: "共 {0} 个标签页",
    matchedTabs: "匹配 {0} / {1} 个标签页",
    closeUnpinned: "关闭未固定的 {0} 项",
    deleting: "正在删除 {0} / {1}",
    noMatchedTabs: "未找到匹配标签页",
    lastAccessed: "最后浏览于",
    unpin: "取消固定",
    pin: "固定",
    refresh: "刷新",
    viewRelation: "查看关联结构",
    copyLink: "复制链接",
    copied: "✓",
    closeTab: "关闭标签页",
    extractingWait: "正在提取，请稍候...",
    noKeywords: "未分析出有效关键词",
    totalKeywords: "共 {0} 个关键词",
    words: "词",
    noTree: "当前没有包含 2 个及以上关系的标签页层级结构",
    treeStats: "共 {0} 个关系结构涉及 {1} 个标签页",
    treeStatsEmpty: "共 0 个关系结构涉及 0 个标签页",
    importing: "导入中 {0} / {1}",
    imported: "[导入] ",
    restricted: "[受限] ",
    localFile: "本地文件",
    restrictedTitle: "⚠️ 浏览器安全限制",
    restrictedDesc1: "由于安全策略，扩展程序无法直接恢复本地文件 (file:///) 或受限页面。",
    restrictedDesc2: "为防止丢失，请手动复制下方原始链接，并在新标签页中打开：",
    navBack: "后退 (长按显示记录)",
    navForward: "前进 (长按显示记录)",
    donateTitle: "支持开发者",
    donateDesc: "如果你觉得这个插件对你有帮助，可以通过以下方式支持我的开发工作：",
    modalExportTitle: "导出此结构"
  },
  en: {
    title: "TabNexus",
    standaloneBtn: "↗ Standalone",
    viewList: "All Tabs",
    viewTree: "Tree View",
    viewKeywords: "Keywords",
    viewDonateBtn: "Support Developer",
    searchPlaceholder: "Regex search title or URL (e.g. github|FreeBSD)...",
    searchClear: "Clear keywords",
    matchUrlOff: "Match URL only (Off)",
    matchUrlOn: "Match URL only (On)",
    sortTimeOff: "Sort by recently accessed",
    sortTimeOn: "Sort by chronological order",
    loading: "Loading...",
    locateBtn: "Locate",
    locateTitle: "Locate active tab",
    exportBtn: "Export",
    exportTitle: "Export currently matched tabs",
    importBtn: "Import",
    importTitle: "Import JSON & silently restore tabs",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    keywordHint: "", 
    extractingBg: "⏳ Extracting in background...",
    treeHeader: "Tab Hierarchy",
    justNow: "Just now",
    secondsAgo: " sec ago",
    minutesAgo: " min ago",
    hoursAgo: " hr ago",
    daysAgo: " days ago",
    unknown: "Unknown",
    totalTabs: "Total {0} tabs",
    matchedTabs: "Matched {0} / {1} tabs",
    closeUnpinned: "Close {0} unpinned",
    deleting: "Deleting {0} / {1}",
    noMatchedTabs: "No matched tabs found",
    lastAccessed: "Last accessed: ",
    unpin: "Unpin",
    pin: "Pin",
    refresh: "Refresh",
    viewRelation: "View relations",
    copyLink: "Copy Link",
    copied: "✓",
    closeTab: "Close tab",
    extractingWait: "Extracting, please wait...",
    noKeywords: "No valid keywords found",
    totalKeywords: "Total {0} keywords",
    words: "words",
    noTree: "No tab hierarchy containing 2 or more relations found.",
    treeStats: "Total {0} relations involving {1} tabs",
    treeStatsEmpty: "0 relations involving 0 tabs",
    importing: "Importing {0} / {1}",
    imported: "[Imported] ",
    restricted: "[Restricted] ",
    localFile: "Local File",
    restrictedTitle: "⚠️ Browser Security Restriction",
    restrictedDesc1: "Due to security policies, extensions cannot directly restore Local Files (file:///) or restricted pages.",
    restrictedDesc2: "To prevent loss, manually copy the original link below and open it in a new tab:",
    navBack: "Back (Long press for history)",
    navForward: "Forward (Long press for history)",
    donateTitle: "Buy me a coffee",
    donateDesc: "If you find this extension helpful, please consider supporting my work:",
    modalExportTitle: "Export this structure"
  }
};

const t = (key, ...args) => {
  let str = i18n[lang][key] || "";
  args.forEach((arg, i) => {
    str = str.replace(`{${i}}`, arg);
  });
  return str;
};

function applyI18n() {
  document.getElementById('header-title').textContent = t('title');
  document.getElementById('nav-back-btn').title = t('navBack');
  document.getElementById('nav-forward-btn').title = t('navForward');
  document.getElementById('btn-standalone').textContent = t('standaloneBtn');
  document.getElementById('btn-standalone').title = t('standaloneBtn');
  document.getElementById('view-list-btn').textContent = t('viewList');
  document.getElementById('view-tree-btn').textContent = t('viewTree');
  document.getElementById('view-keywords-btn').textContent = t('viewKeywords');
  document.getElementById('view-donate-btn').title = t('viewDonateBtn');
  document.getElementById('search').placeholder = t('searchPlaceholder');
  document.getElementById('search-clear-btn').title = t('searchClear');
  document.getElementById('match-url-btn').title = matchUrlEnabled ? t('matchUrlOn') : t('matchUrlOff');
  document.getElementById('sort-time-btn').title = sortByLastAccessed ? t('sortTimeOn') : t('sortTimeOff');
  document.getElementById('tab-count').textContent = t('loading');
  document.getElementById('locate-btn').textContent = t('locateBtn');
  document.getElementById('locate-btn').title = t('locateTitle');
  document.getElementById('export-btn').textContent = t('exportBtn');
  document.getElementById('export-btn').title = t('exportTitle');
  document.getElementById('import-btn').textContent = t('importBtn');
  document.getElementById('import-btn').title = t('importTitle');
  document.getElementById('tree-stats').textContent = t('loading');
  document.getElementById('btn-expand-all').textContent = t('expandAll');
  document.getElementById('btn-collapse-all').textContent = t('collapseAll');
  document.getElementById('modal-header-title').textContent = t('treeHeader');
  document.getElementById('keyword-hint-text').textContent = t('keywordHint');
  document.getElementById('keyword-stats').textContent = t('loading');
  document.getElementById('keyword-loading-indicator').textContent = t('extractingBg');
  document.getElementById('donate-title').textContent = t('donateTitle');
  document.getElementById('donate-desc').textContent = t('donateDesc');
  document.getElementById('modal-export-btn').title = t('modalExportTitle');
}
// ====================================================================

let allTabs = [];
let containersMap = {};
let groupsMap = {}; // 存放全局 tabGroups
let targetWindowId = null;
let currentFilteredTabs = [];

let validParentIds = new Set();
let validChildIds = new Set();

let tabHistory = [];
let historyIndex = -1;
let expectedActiveTabId = null;
let isLongPressing = false;
let pressTimer = null;

let matchUrlEnabled = false;
let sortByLastAccessed = false;
let savedKeywordScrollTop = 0;
let expandedNodeIds = new Set();
let keywordsDirty = true; 
let isProcessing = false; 
let isExtractingKeywords = false; 

const DEFAULT_FAVICON = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>';

const CONTAINER_COLOR_MAP = {
  blue: '#37adff', turquoise: '#00c70a', green: '#51cd00',
  yellow: '#ffb800', orange: '#ff9f00', red: '#ff6165',
  pink: '#ff4bda', purple: '#af51f5', toolbar: '#737373'
};

const GROUP_COLOR_MAP = {
  grey: '#dadce0', blue: '#8ab4f8', red: '#f28b82', yellow: '#fde293',
  green: '#81c995', pink: '#ff8bcb', purple: '#c58af9', cyan: '#78d9ec', orange: '#fcad70'
};


const STOP_WORDS = new Set([
  '的', '了', '在', '是', '我', '有', '和', '就', '不', '人', '都', '一', '一个', '上', '也', '很', '到', '说', '要', '去', '你', '会', '着', '没有', '看', '好', '自己', '这', '等', '页', '首页', '官网', '主页', '新标签页', '搜索', '结果', '文档', '详情',
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'over', 'after', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'http', 'https', 'com', 'cn', 'org', 'net', 'www', 'new', 'tab', 'page', 'home'
]);

// 通用 JSON 导出工具函数
function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function updateRelationSets(tabList) {
  validParentIds.clear();
  validChildIds.clear();
  const tabIds = new Set(tabList.map(t => t.id));
  for (let i = 0; i < tabList.length; i++) {
    const t = tabList[i];
    if (t.openerTabId && tabIds.has(t.openerTabId)) {
      validParentIds.add(t.openerTabId);
      validChildIds.add(t.id);
    }
  }
}

function hasTabRelation(tabId) {
  return validParentIds.has(tabId) || validChildIds.has(tabId);
}

function updateNavButtons() {
  const backBtn = document.getElementById('nav-back-btn');
  const fwdBtn = document.getElementById('nav-forward-btn');
  if (backBtn) backBtn.disabled = historyIndex <= 0;
  if (fwdBtn) fwdBtn.disabled = historyIndex >= tabHistory.length - 1 || historyIndex === -1;
}

function removeTabFromHistory(tabId) {
  let newHistory = [];
  let newIndex = -1;
  for (let i = 0; i < tabHistory.length; i++) {
    if (tabHistory[i] !== tabId) {
      newHistory.push(tabHistory[i]);
      if (i === historyIndex) newIndex = newHistory.length - 1;
    }
  }
  tabHistory = newHistory;
  if (newIndex !== -1) {
    historyIndex = newIndex;
  } else {
    historyIndex = Math.min(historyIndex, tabHistory.length - 1);
  }
  updateNavButtons();
}

function pushToHistory(tabId) {
  if (tabId === expectedActiveTabId) {
    expectedActiveTabId = null;
    return;
  }
  if (historyIndex < tabHistory.length - 1) {
    tabHistory = tabHistory.slice(0, historyIndex + 1);
  }
  if (tabHistory.length > 0 && tabHistory[tabHistory.length - 1] === tabId) return;

  tabHistory.push(tabId);
  historyIndex++;
  
  if (tabHistory.length > 100) {
    tabHistory.shift();
    historyIndex--;
  }
  updateNavButtons();
}

function navigateToHistory(idx) {
  historyIndex = idx;
  const tabId = tabHistory[idx];
  expectedActiveTabId = tabId;
  browser.tabs.update(tabId, { active: true }).catch(() => {
    removeTabFromHistory(tabId);
  });
  updateNavButtons();
}

function closeHistoryPopup() {
  const popup = document.getElementById('history-popup');
  if (popup) popup.style.display = 'none';
}

function showHistoryPopup(btn, items) {
  const popup = document.getElementById('history-popup');
  popup.replaceChildren(); 
  if (items.length === 0) return;

  items.forEach(item => {
    const tab = allTabs.find(t => t.id === item.tabId);
    if (!tab) return;
    
    const div = document.createElement('div');
    div.className = 'history-item';
    
    const img = document.createElement('img');
    img.src = tab.favIconUrl || DEFAULT_FAVICON;
    img.onerror = function() { this.src = DEFAULT_FAVICON; };
    
    const span = document.createElement('span');
    span.textContent = tab.title || tab.url;
    
    if (item.index === historyIndex) {
      span.style.fontWeight = 'bold';
    }
    
    div.appendChild(img);
    div.appendChild(span);

    div.addEventListener('mouseup', (e) => {
      e.stopPropagation();
      closeHistoryPopup();
      if (item.index !== historyIndex) navigateToHistory(item.index);
      isLongPressing = false;
    });
    
    div.addEventListener('click', (e) => {
      e.stopPropagation();
      closeHistoryPopup();
      if (item.index !== historyIndex) navigateToHistory(item.index);
    });

    popup.appendChild(div);
  });
  
  if (popup.children.length > 0) {
    popup.style.display = 'flex';
  }
}

function formatLastAccessed(timestamp) {
  if (!timestamp) return t('unknown');
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSec < 10) return t('justNow');
  if (diffSec < 60) return `${diffSec}${t('secondsAgo')}`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}${t('minutesAgo')}`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}${t('hoursAgo')}`;
  return `${Math.floor(diffSec / 86400)}${t('daysAgo')}`;
}

function filterTabsByKeyword(tabs, keyword) {
  if (!keyword) return tabs;
  let regex = null;
  try { regex = new RegExp(keyword, 'i'); } catch (e) { regex = null; }

  return tabs.filter(tab => {
    const title = tab.title || '';
    let url = tab.url || '';
    
    if (url.includes('popup.html?fallback=')) {
      try {
        const urlObj = new URL(url);
        const realUrl = urlObj.searchParams.get('fallback');
        if (realUrl) url = realUrl;
      } catch (e) {}
    }
    
    let matchTitle = false;
    let matchUrl = false;
    
    if (regex) {
      matchTitle = regex.test(title);
      matchUrl = regex.test(url);
    } else {
      const kw = keyword.toLowerCase();
      matchTitle = title.toLowerCase().includes(kw);
      matchUrl = url.toLowerCase().includes(kw);
    }
    
    return matchUrlEnabled ? matchUrl : matchTitle;
  });
}

function debounce(fn, wait = 200) {
  let timeout = null;
  return function(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

async function updateTargetWindowId(isStandalone) {
  const currentWin = await browser.windows.getCurrent();
  const urlParams = new URLSearchParams(window.location.search);
  const parentWinId = urlParams.get('parentWinId');

  if (parentWinId) {
    targetWindowId = parseInt(parentWinId, 10);
    return;
  }

  if (isStandalone) {
    try {
      const normalWins = await browser.windows.getAll({ windowTypes: ['normal'] });
      const mainWins = normalWins.filter(w => w.id !== currentWin.id);
      if (mainWins.length > 0) {
        const focusedMain = mainWins.find(w => w.focused);
        targetWindowId = focusedMain ? focusedMain.id : mainWins[0].id;
        return;
      }
    } catch (e) {}
  }
  targetWindowId = currentWin.id;
}

function countTreeNodes(node) {
  return 1 + node.children.reduce((acc, child) => acc + countTreeNodes(child), 0);
}

async function init() {
  applyI18n();

  const urlParams = new URLSearchParams(window.location.search);
  const fallbackUrl = urlParams.get('fallback');
  
  if (fallbackUrl) {
    document.body.className = '';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = 'var(--bg-color)';
    
    document.body.replaceChildren(); 
    
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = "max-width: 600px; width: 90%; background: var(--modal-card-bg); padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid var(--border-color); text-align: center; color: var(--text-color);";

    const alertH2 = document.createElement('h2');
    alertH2.style.cssText = "margin-top:0; color: #ff4d4f;";
    alertH2.textContent = t('restrictedTitle');

    const alertP1 = document.createElement('p');
    alertP1.style.cssText = "margin-bottom: 8px;";
    alertP1.textContent = t('restrictedDesc1');

    const alertP2 = document.createElement('p');
    alertP2.style.cssText = "color: var(--text-muted); font-size: 13px; margin-bottom: 20px;";
    alertP2.textContent = t('restrictedDesc2');

    const alertInput = document.createElement('input');
    alertInput.type = 'text';
    alertInput.value = fallbackUrl;
    alertInput.readOnly = true;
    alertInput.onclick = function() { this.select(); };
    alertInput.style.cssText = "width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 6px; box-sizing: border-box; font-size: 14px; background: var(--bg-color); color: var(--text-color); outline: none;";

    alertDiv.appendChild(alertH2);
    alertDiv.appendChild(alertP1);
    alertDiv.appendChild(alertP2);
    alertDiv.appendChild(alertInput);
    document.body.appendChild(alertDiv);
    
    document.title = t('restricted') + (urlParams.get('title') || t('localFile'));
    return;
  }

  const isStandalone = urlParams.get('mode') === 'window';
  if (isStandalone) {
    document.body.classList.add('is-standalone');
    document.getElementById('btn-standalone').style.display = 'none';
  }

  // 恢复搜索词
  if (urlParams.has('q')) {
    const searchInput = document.getElementById('search');
    searchInput.value = urlParams.get('q');
    
    // 手动触发一次清除按钮的显隐判定
    const searchClearBtn = document.getElementById('search-clear-btn');
    if (searchClearBtn) {
      searchClearBtn.style.display = searchInput.value.trim() ? 'flex' : 'none';
    }
  }
  
  // 恢复“仅匹配链接”开关
  if (urlParams.get('urlOnly') === '1') {
    matchUrlEnabled = true;
    const matchUrlBtn = document.getElementById('match-url-btn');
    if (matchUrlBtn) matchUrlBtn.classList.add('active');
  }
  
  // 恢复“按时间排序”开关
  if (urlParams.get('sort') === '1') {
    sortByLastAccessed = true;
    const sortTimeBtn = document.getElementById('sort-time-btn');
    if (sortTimeBtn) sortTimeBtn.classList.add('active');
  }

  document.getElementById('btn-standalone').addEventListener('click', async () => {
    const currentWin = await browser.windows.getCurrent();
    // 捕获当前搜索词与开关状态
    const searchVal = encodeURIComponent(document.getElementById('search').value);
    const urlOnly = matchUrlEnabled ? 1 : 0;
    const sortTime = sortByLastAccessed ? 1 : 0;

    browser.windows.create({
      // 将状态作为查询参数传递给新窗口
      url: browser.runtime.getURL(`popup.html?mode=window&parentWinId=${currentWin.id}&q=${searchVal}&urlOnly=${urlOnly}&sort=${sortTime}`),
      type: 'popup',
      width: 420,
      height: 650
    });
    window.close();
  });

  await updateTargetWindowId(isStandalone);
  
  keywordsDirty = true;
  await refreshDataAndRender();
  
  locateActiveTab();
  bindTabListeners(isStandalone);

  const backBtn = document.getElementById('nav-back-btn');
  const fwdBtn = document.getElementById('nav-forward-btn');

  function setupLongPress(btn, getListFn, clickAction) {
    if (!btn) return;
    btn.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || btn.disabled) return;
      isLongPressing = false;
      pressTimer = setTimeout(() => {
        isLongPressing = true;
        showHistoryPopup(btn, getListFn());
      }, 400);
    });
    btn.addEventListener('mouseup', () => {
      if (!isLongPressing) {
        clearTimeout(pressTimer);
        if (!btn.disabled) {
          closeHistoryPopup();
          clickAction();
        }
      }
    });
    btn.addEventListener('mouseleave', () => {
      if (!isLongPressing) clearTimeout(pressTimer);
    });
  }

  setupLongPress(backBtn, () => {
    let items = [];
    for (let i = historyIndex; i >= 0; i--) {
      items.push({ index: i, tabId: tabHistory[i] });
    }
    return items;
  }, () => {
    if (historyIndex > 0) navigateToHistory(historyIndex - 1);
  });

  setupLongPress(fwdBtn, () => {
    let items = [];
    for (let i = historyIndex; i < tabHistory.length; i++) {
      items.push({ index: i, tabId: tabHistory[i] });
    }
    return items;
  }, () => {
    if (historyIndex < tabHistory.length - 1) navigateToHistory(historyIndex + 1);
  });

  document.addEventListener('mouseup', (e) => {
    if (isLongPressing && !e.target.closest('.history-popup') && !e.target.closest('.nav-btn')) {
      closeHistoryPopup();
      isLongPressing = false;
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-left')) closeHistoryPopup();
  });

  browser.tabs.query({ active: true, windowId: targetWindowId }).then(tabs => {
    if (tabs.length > 0) {
      tabHistory.push(tabs[0].id);
      historyIndex = 0;
      updateNavButtons();
    }
  });

  const listBtn = document.getElementById('view-list-btn');
  const treeBtn = document.getElementById('view-tree-btn');
  const keywordsBtn = document.getElementById('view-keywords-btn');
  const donateBtn = document.getElementById('view-donate-btn');

  const listView = document.getElementById('tab-list');
  const treeView = document.getElementById('tree-panel');
  const keywordsView = document.getElementById('keywords-panel');
  const donateView = document.getElementById('donate-panel');

  const searchBarRow = document.getElementById('search-bar-row');
  const metaBar = document.getElementById('meta-bar');
  const mainContainer = document.getElementById('main-container');

  let currentActiveBtn = listBtn;

  function switchTab(activeBtn, showView) {
    if (currentActiveBtn === keywordsBtn) {
      savedKeywordScrollTop = mainContainer.scrollTop;
    }

    [listBtn, treeBtn, keywordsBtn, donateBtn].forEach(b => b.classList.remove('active'));
    [listView, treeView, keywordsView, donateView].forEach(v => v.style.display = 'none');

    activeBtn.classList.add('active');
    showView.style.display = 'block';
    currentActiveBtn = activeBtn;

    const isListOrKeywordsOrTree = (activeBtn !== donateBtn);
    searchBarRow.style.display = (activeBtn === listBtn) ? 'flex' : 'none';
    metaBar.style.display = (activeBtn === listBtn) ? 'flex' : 'none';

    if (activeBtn === keywordsBtn) {
      if (keywordsDirty) {
        renderKeywordsPanelAsync();
      } else {
        requestAnimationFrame(() => { mainContainer.scrollTop = savedKeywordScrollTop; });
      }
    }
  }

  listBtn.addEventListener('click', () => switchTab(listBtn, listView));
  treeBtn.addEventListener('click', () => {
    switchTab(treeBtn, treeView);
    renderTreePanel();
  });
  keywordsBtn.addEventListener('click', () => switchTab(keywordsBtn, keywordsView));
  donateBtn.addEventListener('click', () => switchTab(donateBtn, donateView));

  const searchInput = document.getElementById('search');
  const searchClearBtn = document.getElementById('search-clear-btn');

  function updateClearBtnVisibility() {
    searchClearBtn.style.display = searchInput.value.trim() ? 'flex' : 'none';
  }

  searchInput.addEventListener('input', debounce((e) => {
    updateClearBtnVisibility();
    const keyword = e.target.value.trim();
    currentFilteredTabs = filterTabsByKeyword(allTabs, keyword);
    renderTabs(currentFilteredTabs, keyword);
  }, 200));

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    updateClearBtnVisibility();
    currentFilteredTabs = allTabs;
    renderTabs(allTabs);
    searchInput.focus();
  });

  const matchUrlBtn = document.getElementById('match-url-btn');
  matchUrlBtn.addEventListener('click', () => {
    matchUrlEnabled = !matchUrlEnabled;
    matchUrlBtn.classList.toggle('active', matchUrlEnabled);
    matchUrlBtn.title = matchUrlEnabled ? t('matchUrlOn') : t('matchUrlOff');
    const searchKeyword = searchInput.value.trim();
    renderTabs(filterTabsByKeyword(allTabs, searchKeyword), searchKeyword);
  });

  const sortTimeBtn = document.getElementById('sort-time-btn');
  sortTimeBtn.addEventListener('click', () => {
    sortByLastAccessed = !sortByLastAccessed;
    sortTimeBtn.classList.toggle('active', sortByLastAccessed);
    sortTimeBtn.title = sortByLastAccessed ? t('sortTimeOn') : t('sortTimeOff');
    const searchKeyword = searchInput.value.trim();
    renderTabs(filterTabsByKeyword(allTabs, searchKeyword), searchKeyword);
  });

  document.getElementById('btn-expand-all').onclick = () => {
    allTabs.forEach(t => {
      if (validParentIds.has(t.id)) expandedNodeIds.add(t.id);
    });
    renderTreePanel();
  };

  document.getElementById('btn-collapse-all').onclick = () => {
    expandedNodeIds.clear();
    renderTreePanel();
  };

  document.getElementById('export-btn').addEventListener('click', () => {
    if (currentFilteredTabs.length === 0) return;
    // 导出时额外记录自身的 id 以及父节点的 openerTabId
    const exportData = currentFilteredTabs.map(t => ({ 
      id: t.id,
      title: t.title, 
      url: t.url,
      parentId: t.openerTabId || null
    }));
    downloadJSON(exportData, `tabs_export_${Date.now()}.json`);
  });

  document.getElementById('import-btn').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });

  document.getElementById('locate-btn')?.addEventListener('click', () => {
    locateActiveTab();
  });

  document.getElementById('import-file').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file || isProcessing) return;
    
    const importBtn = document.getElementById('import-btn');
    const originalText = importBtn.textContent;
    importBtn.disabled = true;
    isProcessing = true; 
    
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data)) return;

      if (isFirefox) {
        // 插入 Firefox 版本的拓扑排序与 browser.tabs.create({discarded: true}) 逻辑
        await handleFirefoxImport(data, importBtn); 
      } else {
        // 插入 Chromium 版本的 lazy.html 与 oldToNewIdMap 映射重组逻辑
        await handleChromiumImport(data, importBtn);
      }
    } catch(err) {
      console.error("Import failed:", err);
    } finally {
      isProcessing = false;
      importBtn.disabled = false;
      importBtn.textContent = originalText;
      e.target.value = '';
      
      keywordsDirty = true;
      await refreshDataAndRender(); 
    }
  });

  // 解决 Firefox 快捷键呼出时 autofocus 失效的问题
  setTimeout(() => {
    const searchInput = document.getElementById('search');
    // 确保当前停留在“所有列表”视图且搜索框存在
    if (searchInput && currentActiveBtn === listBtn) {
      searchInput.focus();
      // 如果搜索框里已经有继承过来的文字，顺便全选它，方便用户直接打字覆盖
      if (searchInput.value) {
        searchInput.select();
      }
    }
  }, 100); // 100ms 延迟足以避开 Firefox 弹窗动画的焦点抢夺期

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
}

async function refreshDataAndRender() {
  const rawTabs = await browser.tabs.query({});
  const popupUrlBase = browser.runtime.getURL('popup.html');

  // 提取并更新标签组数据 (兼容 Chromium 和 Firefox Nightly)
  groupsMap = {};
  if (browser.tabGroups) {
    try {
      const groups = await browser.tabGroups.query({});
      groups.forEach(g => groupsMap[g.id] = g);
    } catch(e) {}
  }

  // ==== 每次重绘时重新拉取最新的 Container 数据，兼容扩展运行期间新增的自定义容器 ====
  containersMap = {};
  if (browser.contextualIdentities) {
    try {
      const containers = await browser.contextualIdentities.query({});
      containers.forEach(c => { containersMap[c.cookieStoreId] = c; });
    } catch (e) {}
  }

  allTabs = rawTabs.filter(t => {
    if (t.url.startsWith(popupUrlBase)) {
      if (t.url.includes('?fallback=')) return true;
      return false; 
    }
    return true;
  });
  
  if(!isFirefox) {
    // 核心修复1：使用标准 Promise 封装兼容所有版本的 storage 安全读取，防止中断崩溃
    const customRelations = await new Promise(resolve => {
      if (chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(['tabRelations'], (res) => {
          resolve(res.tabRelations || {});
        });
      } else {
        resolve({});
      }
    });

    // 核心修复2：强制使用我们自己的关系数据！
    // 如果后台脚本认定它没有关系，就直接 delete 原生给的错乱 openerTabId
    allTabs.forEach(t => {
      if (customRelations[t.id] !== undefined) {
        t.openerTabId = customRelations[t.id];
      } else {
        delete t.openerTabId; 
      }
    });
  }

  updateRelationSets(allTabs);
  
  const searchInput = document.getElementById('search');
  const keyword = searchInput ? searchInput.value.trim() : '';
  const filtered = filterTabsByKeyword(allTabs, keyword);
  renderTabs(filtered, keyword);

  const treeView = document.getElementById('tree-panel');
  if (treeView && treeView.style.display !== 'none') {
    renderTreePanel();
  }
  
  const keywordsView = document.getElementById('keywords-panel');
  if (keywordsView && keywordsView.style.display !== 'none' && keywordsDirty) {
    renderKeywordsPanelAsync();
  }
}

function bindTabListeners(isStandalone) {
  const debouncedRefresh = debounce(async () => {
    if (isProcessing) return; 
    await refreshDataAndRender();
  }, 200);

  browser.tabs.onCreated.addListener(() => {
    debouncedRefresh();
  });
  
  browser.tabs.onMoved.addListener(() => {
    debouncedRefresh(); 
  });

  browser.tabs.onRemoved.addListener((tabId) => {
    removeTabFromHistory(tabId); 
    keywordsDirty = true;
    debouncedRefresh();
  });

  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    let shouldRefreshList = false;
    const oldTab = allTabs.find(t => t.id === tabId);
    
    if (changeInfo.status === 'complete' || changeInfo.title !== undefined) {
      if (!oldTab || oldTab.title !== tab.title) {
        keywordsDirty = true;
      }
      shouldRefreshList = true;
    }
    
    if (changeInfo.favIconUrl !== undefined || changeInfo.pinned !== undefined) {
      shouldRefreshList = true;
    }
    
    if (shouldRefreshList) {
      debouncedRefresh();
    }
  });

  browser.tabs.onActivated.addListener(async (activeInfo) => {
    await updateTargetWindowId(isStandalone);
    if (activeInfo.windowId === targetWindowId || targetWindowId === null) {
      pushToHistory(activeInfo.tabId);
    }

    allTabs.forEach(t => {
      if (t.windowId === activeInfo.windowId) {
        t.active = (t.id === activeInfo.tabId);
      }
    });

    document.querySelectorAll('.tab-item.active-tab').forEach(el => el.classList.remove('active-tab'));
    const newActiveEl = document.getElementById(`tab-item-${activeInfo.tabId}`);
    if (newActiveEl) newActiveEl.classList.add('active-tab');

    const locateBtn = document.getElementById('locate-btn');
    if (locateBtn) {
      const isTargetActive = currentFilteredTabs.some(t => t.id === activeInfo.tabId);
      locateBtn.style.display = isTargetActive ? 'inline-block' : 'none';
    }

    locateActiveTab();
  });

  // === 监听浏览器原生标签组的变化 ===
  if (browser.tabGroups) {
    browser.tabGroups.onUpdated.addListener((group) => {
      // 组被折叠、展开、改名或改色时刷新
      debouncedRefresh();
    });
    browser.tabGroups.onCreated.addListener(() => {
      debouncedRefresh();
    });
    browser.tabGroups.onRemoved.addListener(() => {
      debouncedRefresh();
    });
  }

  // === 监听 Firefox 原生容器的变化 (新建、改色、改名、删除) ===
  if (browser.contextualIdentities) {
    browser.contextualIdentities.onUpdated.addListener(() => {
      debouncedRefresh();
    });
    browser.contextualIdentities.onCreated.addListener(() => {
      debouncedRefresh();
    });
    browser.contextualIdentities.onRemoved.addListener(() => {
      debouncedRefresh();
    });
  }
}

function locateActiveTab() {
  let activeTab = allTabs.find(t => t.active && t.windowId === targetWindowId);
  if (!activeTab) activeTab = allTabs.find(t => t.active);
  if (activeTab) {
    const el = document.getElementById(`tab-item-${activeTab.id}`);
    if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

function renderTabs(tabs, searchKeyword = '') {
  currentFilteredTabs = tabs;
  const tabList = document.getElementById('tab-list');
  const tabCountEl = document.getElementById('tab-count');
  const closeMatchedBtn = document.getElementById('close-matched-btn');
  const importBtn = document.getElementById('import-btn');
  const locateBtn = document.getElementById('locate-btn');

  tabCountEl.textContent = tabs.length === allTabs.length 
    ? t('totalTabs', allTabs.length) 
    : t('matchedTabs', tabs.length, allTabs.length);

  const isStandaloneMode = document.body.classList.contains('is-standalone');
  if (searchKeyword || !isStandaloneMode) {
    importBtn.style.display = 'none';
  } else {
    importBtn.style.display = 'inline-block';
  }

  let activeTabInFilter = tabs.find(t => t.active && t.windowId === targetWindowId);
  if (!activeTabInFilter) activeTabInFilter = tabs.find(t => t.active);
  if (locateBtn) {
    locateBtn.style.display = activeTabInFilter ? 'inline-block' : 'none';
  }

  const unpinnedMatchedTabs = tabs.filter(t => !t.pinned);

  if (searchKeyword && unpinnedMatchedTabs.length > 1) {
    closeMatchedBtn.style.display = 'inline-block';
    closeMatchedBtn.textContent = t('closeUnpinned', unpinnedMatchedTabs.length);
    
    closeMatchedBtn.onclick = async () => {
      if (isProcessing) return;
      isProcessing = true;
      closeMatchedBtn.disabled = true;
      
      const idsToRemove = unpinnedMatchedTabs.map(t => t.id);
      const BATCH_SIZE = 20; 
      const total = idsToRemove.length;
      
      for (let i = 0; i < total; i += BATCH_SIZE) {
        const batch = idsToRemove.slice(i, i + BATCH_SIZE);
        closeMatchedBtn.textContent = t('deleting', Math.min(i + batch.length, total), total);
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        await new Promise(r => setTimeout(r, 20));
        try {
          await browser.tabs.remove(batch);
        } catch (e) {}
      }
      
      isProcessing = false;
      closeMatchedBtn.disabled = false;
      
      keywordsDirty = true;
      await refreshDataAndRender();
    };
  } else {
    closeMatchedBtn.style.display = 'none';
  }

  tabList.replaceChildren(); 
  if (tabs.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.style.cssText = "text-align:center; color:var(--text-muted); padding:12px;";
    emptyLi.textContent = t('noMatchedTabs');
    tabList.appendChild(emptyLi);
    return;
  }

  let displayTabs = [...tabs];
  if (sortByLastAccessed) {
    displayTabs.sort((a, b) => (b.lastAccessed || 0) - (a.lastAccessed || 0));
  }

  const fragment = document.createDocumentFragment();

  // 内部辅助函数：用来处理带有 Group 分组结构的标签页渲染
  function appendTabsWithGroups(tabListItems) {
    let previousGroupId = -1;
    let previousTabDOM = null;

    tabListItems.forEach(tab => {
      let groupId = (tab.groupId !== undefined && tab.groupId !== -1) ? tab.groupId : -1;

      // 如果碰到了一个新的组
      if (groupId !== -1 && groupId !== previousGroupId && groupsMap[groupId]) {
         if (previousTabDOM && previousGroupId !== -1) {
           previousTabDOM.classList.add('group-end'); // 闭合上一个组
         }

         const g = groupsMap[groupId];
         const groupColor = GROUP_COLOR_MAP[g.color] || g.color || '#888';

         const headerLi = document.createElement('li');
         headerLi.className = 'group-header';
         headerLi.style.setProperty('--group-color', groupColor);

         const isCollapsed = g.collapsed;
         
         // 初始化时，如果折叠则加上隐藏竖条的类
         if (isCollapsed) {
           headerLi.classList.add('is-collapsed');
         }

         // 如果为空，使用 \u200B (零宽空格) 作为占位，强制触发表盘默认行高的渲染，彻底解决高度坍缩
         const titleSpan = document.createElement('span');
         titleSpan.className = 'group-title';
         titleSpan.textContent = g.title || "\u200B"; 

         headerLi.appendChild(titleSpan);

         headerLi.onclick = async () => {
           const newCollapsedState = !g.collapsed;
           try {
             if (browser.tabGroups) {
               await browser.tabGroups.update(groupId, { collapsed: newCollapsedState });
             }
             
             // 乐观更新
             g.collapsed = newCollapsedState;
             
             // 点击时同步切换左侧竖条的显示/隐藏状态
             if (newCollapsedState) {
               headerLi.classList.add('is-collapsed');
             } else {
               headerLi.classList.remove('is-collapsed');
             }

             document.querySelectorAll(`.grouped-tab[data-group-id="${groupId}"]`).forEach(el => {
               if (newCollapsedState) {
                 el.classList.add('group-collapsed');
               } else {
                 el.classList.remove('group-collapsed');
               }
             });
           } catch (e) {
             console.error("更新标签组折叠状态失败", e);
           }
         };

         fragment.appendChild(headerLi);
      } else if (groupId === -1 && previousGroupId !== -1 && previousTabDOM) {
         previousTabDOM.classList.add('group-end'); // 退出组时进行闭合
      }

      const tabDOM = createTabItemDOM(tab);

      // 为同组的元素补充视觉联结参数
      if (groupId !== -1 && groupsMap[groupId]) {
         const groupColor = GROUP_COLOR_MAP[groupsMap[groupId].color] || groupsMap[groupId].color || '#888';
         tabDOM.classList.add('grouped-tab');
         tabDOM.setAttribute('data-group-id', groupId);
         tabDOM.style.setProperty('--group-color', groupColor);
         
         if (groupsMap[groupId].collapsed) {
           tabDOM.classList.add('group-collapsed');
         }
      }

      fragment.appendChild(tabDOM);
      previousGroupId = groupId;
      previousTabDOM = tabDOM;
    });

    if (previousGroupId !== -1 && previousTabDOM) {
      previousTabDOM.classList.add('group-end'); // 闭合列表结尾的组
    }
  }

  const pinnedTabs = displayTabs.filter(t => t.pinned);
  const unpinnedTabs = displayTabs.filter(t => !t.pinned);

  if (pinnedTabs.length > 0) appendTabsWithGroups(pinnedTabs);
  if (pinnedTabs.length > 0 && unpinnedTabs.length > 0) {
    const divider = document.createElement('li');
    divider.className = 'divider';
    fragment.appendChild(divider);
  }
  if (unpinnedTabs.length > 0) appendTabsWithGroups(unpinnedTabs);

  tabList.appendChild(fragment);
}

function createTabItemDOM(tab) {
  const li = document.createElement('li');
  li.className = 'tab-item';
  li.id = `tab-item-${tab.id}`;
  li.tabIndex = 0;

  if (tab.active && tab.windowId === targetWindowId) li.classList.add('active-tab');

  // Firefox Container：安全解析自定义颜色并改为从左到右柔和背景渐变
  if (tab.cookieStoreId && containersMap[tab.cookieStoreId]) {
    const c = containersMap[tab.cookieStoreId];
    // 获取颜色：优先 colorCode，其次映射表，最后使用原生 color 值作为兜底
    const rawColor = c.color ? c.color.toLowerCase() : '';
    const color = c.colorCode || CONTAINER_COLOR_MAP[rawColor] || c.color || '#37adff';
    
    // 使用 color-mix 兼容非 HEX 的任意 CSS 颜色（如原生颜色名、rgb等），防止硬拼接 '+ 40' 导致 CSS 失效
    li.style.backgroundImage = `linear-gradient(to right, transparent 0%, color-mix(in srgb, ${color} 25%, transparent) 100%)`;
  }

  let fullTitle = tab.title || tab.url;
  let fullUrl = tab.url || '';
  const lastAccessedStr = formatLastAccessed(tab.lastAccessed);
  
  if (fullUrl.includes('popup.html?fallback=')) {
    try {
      const urlObj = new URL(fullUrl);
      const realUrl = urlObj.searchParams.get('fallback');
      if (realUrl) fullUrl = realUrl;
    } catch (e) {}
  }
  
  li.title = `${fullUrl}\n\n${fullTitle}\n\n${t('lastAccessed')}${lastAccessedStr}`;

  // 在鼠标悬停的 Title 提示最顶端，加上自定义容器的名称，增强兼容辨识度
  if (tab.cookieStoreId && containersMap[tab.cookieStoreId]) {
    li.title = `[${containersMap[tab.cookieStoreId].name}] \n${li.title}`;
  }

  const mainRow = document.createElement('div');
  mainRow.className = 'tab-main-row';

  const img = document.createElement('img');
  img.className = 'favicon';
  img.src = tab.favIconUrl || DEFAULT_FAVICON;
  img.onerror = () => { img.src = DEFAULT_FAVICON; };

  const titleSpan = document.createElement('span');
  titleSpan.className = 'title';
  titleSpan.textContent = fullTitle;

  const actionGroup = document.createElement('div');
  actionGroup.className = 'action-group';

  const pinBtn = document.createElement('button');
  pinBtn.className = 'action-btn';
  pinBtn.title = tab.pinned ? t('unpin') : t('pin');
  pinBtn.textContent = tab.pinned ? '📍' : '📌';
  pinBtn.onclick = async (e) => {
    e.stopPropagation();
    pinBtn.style.opacity = '0.5'; 
    try {
      await browser.tabs.update(tab.id, { pinned: !tab.pinned });
    } catch (err) {}
  };
  actionGroup.appendChild(pinBtn);

  const refreshBtn = document.createElement('button');
  refreshBtn.className = 'action-btn';
  refreshBtn.title = t('refresh');
  refreshBtn.textContent = '🔄';
  refreshBtn.onclick = async (e) => {
    e.stopPropagation();
    refreshBtn.style.transform = 'rotate(180deg)';
    refreshBtn.style.transition = 'transform 0.3s ease';
    try {
      await browser.tabs.reload(tab.id);
    } catch (err) {}
    setTimeout(() => {
      refreshBtn.style.transform = '';
      refreshBtn.style.transition = '';
    }, 300);
  };
  actionGroup.appendChild(refreshBtn);

  if (hasTabRelation(tab.id)) {
    const relationBtn = document.createElement('button');
    relationBtn.className = 'action-btn';
    relationBtn.title = t('viewRelation');
    relationBtn.textContent = '🌿';
    relationBtn.onclick = (e) => {
      e.stopPropagation();
      openTabRelationModal(tab.id);
    };
    actionGroup.appendChild(relationBtn);
  }

  const copyBtn = document.createElement('button');
  copyBtn.className = 'action-btn copy-btn';
  copyBtn.title = t('copyLink');
  copyBtn.textContent = '🔗';
  copyBtn.onclick = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(fullUrl);
      copyBtn.textContent = t('copied');
      setTimeout(() => { copyBtn.textContent = '🔗'; }, 1200);
    } catch (err) {}
  };
  actionGroup.appendChild(copyBtn);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'action-btn close-btn';
  closeBtn.title = t('closeTab');
  closeBtn.textContent = '✕';
  closeBtn.onclick = async (e) => {
    e.stopPropagation();
    li.remove(); 
    try {
      await browser.tabs.remove(tab.id);
    } catch (err) {}
  };

  actionGroup.appendChild(closeBtn);

  mainRow.appendChild(img);
  mainRow.appendChild(titleSpan);
  mainRow.appendChild(actionGroup);
  li.appendChild(mainRow);

  li.addEventListener('click', async () => {
    await browser.tabs.update(tab.id, { active: true });
    await browser.windows.update(tab.windowId, { focused: true });
    if (new URLSearchParams(window.location.search).get('mode') !== 'window') window.close();
  });

  return li;
}

async function extractKeywordsAsync(tabs) {
  const uniqueTokens = new Map();
  const hasSegmenter = typeof Intl !== 'undefined' && Intl.Segmenter;
  const segmenter = hasSegmenter ? new Intl.Segmenter(['zh', 'en'], { granularity: 'word' }) : null;

  const BATCH_SIZE = 50; 
  
  for (let i = 0; i < tabs.length; i += BATCH_SIZE) {
    const batch = tabs.slice(i, i + BATCH_SIZE);
    batch.forEach(tab => {
      const title = tab.title || '';
      let rawTokens = [];
      if (segmenter) {
        for (const { segment, isWordLike } of segmenter.segment(title)) {
          if (isWordLike) rawTokens.push(segment);
        }
      } else {
        rawTokens = title.split(/[\s\-_|:,\.\[\]\(\)【】（）—]+/);
      }
      rawTokens.forEach(token => {
        const cleaned = token.trim();
        const lower = cleaned.toLowerCase();
        if (cleaned.length >= 2 && !/^\d+$/.test(cleaned) && !STOP_WORDS.has(lower)) {
          if (!uniqueTokens.has(lower)) uniqueTokens.set(lower, cleaned);
        }
      });
    });
    await new Promise(r => setTimeout(r, 5));
  }

  const results = [];
  const tokensArray = Array.from(uniqueTokens.entries());
  const TOKEN_BATCH_SIZE = 100;

  for (let i = 0; i < tokensArray.length; i += TOKEN_BATCH_SIZE) {
    const batch = tokensArray.slice(i, i + TOKEN_BATCH_SIZE);
    
    batch.forEach(([lowerKey, displayStr]) => {
      let searchStr = displayStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (/^[a-zA-Z0-9_]+$/.test(displayStr)) searchStr = `\\b${searchStr}\\b`;
      
      let regex;
      try { regex = new RegExp(searchStr, 'i'); } catch (e) { return; }

      const matchedCount = tabs.filter(tab => regex.test(tab.title || '')).length;
      if (matchedCount > 0) {
        results.push({ display: displayStr, count: matchedCount, searchStr: searchStr });
      }
    });
    
    await new Promise(r => setTimeout(r, 5));
  }

  return results.sort((a, b) => b.count - a.count);
}

async function renderKeywordsPanelAsync() {
  if (isExtractingKeywords) return;
  isExtractingKeywords = true;

  const container = document.getElementById('keywords-container');
  const loadingIndicator = document.getElementById('keyword-loading-indicator');
  const statsEl = document.getElementById('keyword-stats');
  
  const currentlyExpandedGroups = new Set();
  const existingHeaders = container.querySelectorAll('.group-header');
  existingHeaders.forEach(header => {
    const groupId = header.getAttribute('data-group-id');
    const contentEl = header.nextElementSibling;
    if (contentEl && contentEl.classList.contains('expanded') && groupId) {
      currentlyExpandedGroups.add(groupId);
    }
  });
  const hasExistingGroups = existingHeaders.length > 0;
  
  if (!hasExistingGroups) {
    container.replaceChildren(); 
    const extractDiv = document.createElement('div');
    extractDiv.style.cssText = "color:var(--text-muted); text-align:center; padding:30px; font-size:13px;";
    extractDiv.textContent = t('extractingWait');
    container.appendChild(extractDiv);
  } else {
    if (loadingIndicator) loadingIndicator.style.display = 'inline';
  }
  
  await new Promise(r => setTimeout(r, 10));

  const keywords = await extractKeywordsAsync(allTabs);

  if (statsEl) {
    statsEl.textContent = t('totalKeywords', keywords.length);
  }

  if (keywords.length === 0) {
    container.replaceChildren();
    const emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = "color:var(--text-muted); text-align:center; padding:20px; width:100%;";
    emptyDiv.textContent = t('noKeywords');
    container.appendChild(emptyDiv);

    isExtractingKeywords = false;
    keywordsDirty = false;
    if (loadingIndicator) loadingIndicator.style.display = 'none';
    return;
  }

  let freqMap = new Map();
  for (let kw of keywords) {
    if (!freqMap.has(kw.count)) freqMap.set(kw.count, []);
    freqMap.get(kw.count).push(kw);
  }
  let buckets = Array.from(freqMap.entries())
                     .map(([c, items]) => ({count: c, items: items}))
                     .sort((a, b) => b.count - a.count);

  let N = keywords.length;
  let finalGroups = [];

  if (buckets.length <= 8) {
    finalGroups = buckets.map(b => ({ items: b.items, maxCount: b.count, minCount: b.count }));
  } else {
    let lastBucket = buckets[buckets.length - 1];
    let hasRule3 = (lastBucket.count === 1 && lastBucket.items.length > N / 2);
    
    let k = hasRule3 ? 7 : 8;
    let bucketsToProcess = hasRule3 ? buckets.slice(0, -1) : buckets;
    let R = bucketsToProcess.reduce((sum, b) => sum + b.items.length, 0);
    
    let targets = [];
    let rem = R;
    let minSize = Math.max(1, Math.floor(N * 0.01)); 
    
    for (let step = 1; step < k; step++) {
      let groupsLeft = k - step;
      let t = Math.floor(rem / 2); 
      if (t < minSize) t = minSize;
      if (rem - t < minSize * groupsLeft) {
        t = Math.max(1, rem - minSize * groupsLeft);
      }
      targets.unshift(t);
      rem -= t;
    }
    targets.unshift(Math.max(1, rem));

    let grouped = [];
    let currentGroup = { items: [], maxCount: -1, minCount: Infinity };
    let targetIndex = 0;
    
    for (let i = 0; i < bucketsToProcess.length; i++) {
      let b = bucketsToProcess[i];
      if (currentGroup.maxCount === -1) currentGroup.maxCount = b.count;
      currentGroup.minCount = b.count;
      currentGroup.items.push(...b.items);
      
      let remainingBuckets = bucketsToProcess.length - 1 - i;
      let groupsLeft = targets.length - 1 - targetIndex;
      
      if (targetIndex < targets.length - 1) {
        if ((currentGroup.items.length >= targets[targetIndex] && remainingBuckets >= groupsLeft) || remainingBuckets === groupsLeft) {
          grouped.push(currentGroup);
          currentGroup = { items: [], maxCount: -1, minCount: Infinity };
          targetIndex++;
        }
      }
    }
    if (currentGroup.items.length > 0) grouped.push(currentGroup);
    finalGroups = grouped;
    
    if (hasRule3) {
      finalGroups.push({ items: lastBucket.items, maxCount: 1, minCount: 1 });
    }
  }

  const fragment = document.createDocumentFragment();
  let cumulative = 0;

  finalGroups.forEach((g, index) => {
    let countItems = g.items.length;
    let startPct = Math.round((cumulative / N) * 100);
    let endPct = Math.round(((cumulative + countItems) / N) * 100);
    cumulative += countItems;

    let rangeStr = g.maxCount === g.minCount ? `=${g.maxCount}` : `${g.maxCount}~${g.minCount}`;
    let label = "";
    
    if (finalGroups.length === 1) {
      label = `100%(${rangeStr}) - ${countItems}${t('words')}`;
    } else if (index === 0) {
      label = `~${endPct}%(>${g.minCount - 1}) - ${countItems}${t('words')}`;
    } else if (index === finalGroups.length - 1) {
      label = `~100%(<${g.maxCount + 1}) - ${countItems}${t('words')}`;
    } else {
      label = `${startPct}%~${endPct}%(${rangeStr}) - ${countItems}${t('words')}`;
    }

    let groupEl = document.createElement('div');
    groupEl.className = 'keyword-group';
    
    let headerEl = document.createElement('div');
    headerEl.className = 'group-header';
    const groupId = `group-${index}`;
    headerEl.setAttribute('data-group-id', groupId);
    
    let isExpanded = false;
    if (hasExistingGroups) {
      isExpanded = currentlyExpandedGroups.has(groupId);
    } else {
      isExpanded = index < 2; 
    }

    let toggleEl = document.createElement('span');
    toggleEl.className = 'group-toggle';
    toggleEl.textContent = isExpanded ? '▼' : '▶';
    
    let textEl = document.createElement('span');
    textEl.textContent = label;
    
    headerEl.appendChild(toggleEl);
    headerEl.appendChild(textEl);
    
    let contentEl = document.createElement('div');
    contentEl.className = `group-content ${isExpanded ? 'expanded' : ''}`;
    
    g.items.forEach(kw => {
      let chip = document.createElement('div');
      chip.className = 'keyword-chip';
      
      let wordSpan = document.createElement('span');
      wordSpan.textContent = kw.display;
      chip.appendChild(wordSpan);
      
      chip.onclick = () => {
        const mainContainer = document.getElementById('main-container');
        savedKeywordScrollTop = mainContainer.scrollTop;
        
        matchUrlEnabled = false;
        const matchUrlBtn = document.getElementById('match-url-btn');
        if (matchUrlBtn) {
          matchUrlBtn.classList.remove('active');
          matchUrlBtn.title = matchUrlEnabled ? t('matchUrlOn') : t('matchUrlOff');
        }

        document.getElementById('view-list-btn').click();
        const searchInput = document.getElementById('search');
        
        searchInput.value = kw.searchStr;
        document.getElementById('search-clear-btn').style.display = 'flex';
        
        const filtered = filterTabsByKeyword(allTabs, kw.searchStr);
        renderTabs(filtered, kw.searchStr);
      };
      
      contentEl.appendChild(chip);
    });
    
    headerEl.onclick = () => {
      isExpanded = !isExpanded;
      toggleEl.textContent = isExpanded ? '▼' : '▶';
      contentEl.classList.toggle('expanded', isExpanded);
    };
    
    groupEl.appendChild(headerEl);
    groupEl.appendChild(contentEl);
    fragment.appendChild(groupEl);
  });

  const mainContainer = document.getElementById('main-container');
  const exactScrollTop = mainContainer.scrollTop;

  container.replaceChildren(fragment); 
  
  mainContainer.scrollTop = exactScrollTop;
  savedKeywordScrollTop = exactScrollTop;
  
  isExtractingKeywords = false;
  keywordsDirty = false;
  if (loadingIndicator) loadingIndicator.style.display = 'none';
}

function buildTabTrees(tabList) {
  const map = new Map();
  tabList.forEach(t => map.set(t.id, { ...t, children: [] }));

  const roots = [];
  map.forEach(node => {
    if (node.openerTabId && map.has(node.openerTabId)) {
      map.get(node.openerTabId).children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots.filter(root => countTreeNodes(root) >= 2);
}

function renderTreePanel() {
  const content = document.getElementById('tree-content');
  const treeStatsEl = document.getElementById('tree-stats');
  content.replaceChildren(); 
  const validRoots = buildTabTrees(allTabs);

  if (validRoots.length === 0) {
    if (treeStatsEl) treeStatsEl.textContent = t('treeStatsEmpty');
    const emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = "text-align:center; color:var(--text-muted); padding:20px;";
    emptyDiv.textContent = t('noTree');
    content.appendChild(emptyDiv);
    return;
  }
  
  let totalTabsInTrees = validRoots.reduce((acc, root) => acc + countTreeNodes(root), 0);
  if (treeStatsEl) {
    treeStatsEl.textContent = t('treeStats', validRoots.length, totalTabsInTrees);
  }

  const fragment = document.createDocumentFragment();
  validRoots.forEach(root => { fragment.appendChild(renderTreeNode(root, false)); });
  content.appendChild(fragment);
}

function renderTreeNode(node, isModal = false) {
  const nodeContainer = document.createElement('div');
  nodeContainer.className = 'tree-node';

  const header = document.createElement('div');
  header.className = 'tree-header';

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = isModal ? true : expandedNodeIds.has(node.id);

  const toggleBtn = document.createElement('span');
  toggleBtn.className = 'toggle-btn';
  toggleBtn.textContent = hasChildren ? (isExpanded ? '▼' : '▶') : '•';

  const tabDOM = createTabItemDOM(node);
  tabDOM.style.flex = '1';

  header.appendChild(toggleBtn);
  header.appendChild(tabDOM);
  nodeContainer.appendChild(header);

  if (hasChildren) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = `tree-children ${isExpanded ? 'expanded' : ''}`;

    node.children.forEach(child => {
      childrenContainer.appendChild(renderTreeNode(child, isModal));
    });

    nodeContainer.appendChild(childrenContainer);

    toggleBtn.onclick = (e) => {
      e.stopPropagation();
      const currentlyExpanded = childrenContainer.classList.contains('expanded');
      if (currentlyExpanded) {
        childrenContainer.classList.remove('expanded');
        toggleBtn.textContent = '▶';
        if (!isModal) expandedNodeIds.delete(node.id);
      } else {
        childrenContainer.classList.add('expanded');
        toggleBtn.textContent = '▼';
        if (!isModal) expandedNodeIds.add(node.id);
      }
    };
  }
  return nodeContainer;
}

function openTabRelationModal(targetTabId) {
  const modalContent = document.getElementById('modal-tree-content');
  modalContent.replaceChildren(); 

  const tabMap = new Map();
  allTabs.forEach(t => tabMap.set(t.id, { ...t, children: [] }));
  allTabs.forEach(t => {
    if (t.openerTabId && tabMap.has(t.openerTabId)) {
      tabMap.get(t.openerTabId).children.push(tabMap.get(t.id));
    }
  });

  // 回溯寻找树的根节点
  let root = tabMap.get(targetTabId);
  while (root && root.openerTabId && tabMap.has(root.openerTabId)) {
    root = tabMap.get(root.openerTabId);
  }
  if (!root) return;

  // 【核心新增】为弹窗内的导出按钮绑定事件
  const modalExportBtn = document.getElementById('modal-export-btn');
  if (modalExportBtn) {
    modalExportBtn.onclick = () => {
      const flatList = [];
      // 递归展平结构以供导出
      function flatten(node) {
        flatList.push({
          id: node.id,
          title: node.title,
          url: node.url,
          parentId: node.openerTabId || null
        });
        if (node.children) {
          node.children.forEach(flatten);
        }
      }
      flatten(root);
      downloadJSON(flatList, `tree_export_${Date.now()}.json`);
    };
  }

  const treeDOM = renderTreeNode(root, true);
  treeDOM.querySelectorAll('.tab-item').forEach(el => {
    const id = parseInt(el.id.replace('tab-item-', ''));
    el.onclick = () => {
      closeModal();
      switchToListAndScroll(id);
    };
  });

  modalContent.appendChild(treeDOM);
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() { document.getElementById('modal-overlay').classList.remove('active'); }

function switchToListAndScroll(tabId) {
  document.getElementById('view-list-btn').click();
  setTimeout(() => {
    const el = document.getElementById(`tab-item-${tabId}`);
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      el.focus();
    }
  }, 100);
}

document.addEventListener('DOMContentLoaded', init);

async function handleFirefoxImport(data, importBtn){
  const currentWinTabs = await browser.tabs.query({ windowId: targetWindowId });
  let nextIndex = currentWinTabs.length;
  
  let pendingTabs = [...data]; // 待处理的导入队列
  let oldToNewIdMap = {};      // 旧 JSON ID -> Firefox 真实 ID
  let importedCount = 0;
  const total = pendingTabs.length;

  // 循环直到所有标签页都被创建（确保父节点永远在子节点之前被创建）
  while (pendingTabs.length > 0) {
    let processedInThisRound = false;

    for (let i = 0; i < pendingTabs.length; i++) {
      const item = pendingTabs[i];
      
      // 触发创建的条件：没有父节点，或者父节点已经被创建并拿到了新的 Firefox ID
      if (!item.parentId || oldToNewIdMap[item.parentId]) {
        importBtn.textContent = t('importing', importedCount + 1, total);
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

        if (item.url) {
          try {
            // Firefox 原生神级 API，直接指定休眠和伪装标题
            let createProps = {
              windowId: targetWindowId,
              url: item.url,
              discarded: true, 
              active: false,
              title: `${t('imported')}${item.title || t('unknown')}`, 
              index: nextIndex++
            };

            // 如果有父节点，将其原生地挂载到对应的真实 Firefox ID 下
            if (item.parentId && oldToNewIdMap[item.parentId]) {
              createProps.openerTabId = oldToNewIdMap[item.parentId];
            }

            const newTab = await browser.tabs.create(createProps);
            // 记录供它的子节点随后使用
            if (item.id) oldToNewIdMap[item.id] = newTab.id;

          } catch (err) {
            // Fallback: 应对本地文件等受限 URL
            try {
              const fallbackTitle = item.title || t('localFile');
              const fallbackSafeUrl = browser.runtime.getURL(`popup.html?fallback=${encodeURIComponent(item.url)}&title=${encodeURIComponent(fallbackTitle)}`);
              
              let fallbackProps = {
                windowId: targetWindowId,
                url: fallbackSafeUrl,
                discarded: true,
                active: false,
                title: `${t('restricted')}${fallbackTitle}`,
                index: nextIndex++ 
              };

              if (item.parentId && oldToNewIdMap[item.parentId]) {
                fallbackProps.openerTabId = oldToNewIdMap[item.parentId];
              }

              const newTab = await browser.tabs.create(fallbackProps);
              if (item.id) oldToNewIdMap[item.id] = newTab.id;
            } catch (fallbackErr) {
              nextIndex--;
            }
          }
        }
        
        // 从待办队列移除，调整索引
        pendingTabs.splice(i, 1);
        processedInThisRound = true;
        importedCount++;
        i--; 
      }
    }

    // 如果一整圈下来一个节点都没处理，说明数据里有“孤儿节点”（父节点 ID 不在文件内）
    // 强行切断第一个队列成员的父子关系，防止死循环卡死导入
    if (!processedInThisRound && pendingTabs.length > 0) {
      pendingTabs[0].parentId = null;
    }
  }
}

async function handleChromiumImport(data, importBtn){
  const currentWinTabs = await browser.tabs.query({ windowId: targetWindowId });
  let nextIndex = currentWinTabs.length;
  
  // 【核心新增】用于重组关系树的 ID 映射表
  let oldToNewIdMap = {};
  let relationsToRestore = [];
  const BATCH_SIZE = 25; 
  const total = data.length;

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = data.slice(i, i + BATCH_SIZE);
    
    importBtn.textContent = t('importing', Math.min(i + batch.length, total), total);
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise(r => setTimeout(r, 10));

    for (const item of batch) {
      if (item.url) {
        try {
          const importedTitle = `${t('imported')}${item.title || t('unknown')}`;
          const lazyUrl = browser.runtime.getURL(`lazy.html?url=${encodeURIComponent(item.url)}&title=${encodeURIComponent(importedTitle)}`);

          const newTab = await browser.tabs.create({ 
            windowId: targetWindowId,
            url: lazyUrl, 
            active: false, 
            index: nextIndex++ 
          });
          
          // 记录新老 ID 映射关系
          if (item.id) oldToNewIdMap[item.id] = newTab.id;
          if (item.parentId) relationsToRestore.push({ oldChildId: item.id, oldParentId: item.parentId });

        } catch (err) {
          try {
            const fallbackTitle = item.title || t('localFile');
            const fallbackSafeUrl = browser.runtime.getURL(`popup.html?fallback=${encodeURIComponent(item.url)}&title=${encodeURIComponent(fallbackTitle)}`);
            
            const newTab = await browser.tabs.create({
              windowId: targetWindowId,
              url: fallbackSafeUrl,
              active: false,
              index: nextIndex++ 
            });
            
            // 同步记录 Fallback 的新老 ID 映射
            if (item.id) oldToNewIdMap[item.id] = newTab.id;
            if (item.parentId) relationsToRestore.push({ oldChildId: item.id, oldParentId: item.parentId });
          } catch (fallbackErr) {
            nextIndex--;
          }
        }
      }
    }
  }
  
  // 【核心新增】批量恢复导入标签页的父子层级关系
  if (relationsToRestore.length > 0) {
    const result = await new Promise(r => chrome.storage.local.get(['tabRelations'], r));
    let tabRelations = result.tabRelations || {};
    let changed = false;
    
    // 将旧 JSON 里的结构套用到 Chromium 新分配的标签页 ID 上
    for (const rel of relationsToRestore) {
      const newChildId = oldToNewIdMap[rel.oldChildId];
      const newParentId = oldToNewIdMap[rel.oldParentId];
      if (newChildId && newParentId) {
        tabRelations[newChildId] = newParentId;
        changed = true;
      }
    }
    
    // 写回后台存储
    if (changed) {
      await new Promise(r => chrome.storage.local.set({ tabRelations }, r));
    }
  }
}