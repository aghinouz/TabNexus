const params = new URLSearchParams(window.location.search);
const url = params.get('url');
const title = params.get('title');

if (title) document.title = title;

function restore() {
  if (url) {
    // 核心修复：利用扩展 API 绕过 Chromium 的安全拦截，强行跳转内部协议
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.getCurrent((tab) => {
        if (tab) {
          chrome.tabs.update(tab.id, { url: url });
        } else {
          window.location.replace(url);
        }
      });
    } else {
      window.location.replace(url);
    }
  }
}

window.addEventListener('focus', restore);
if (document.hasFocus()) restore();