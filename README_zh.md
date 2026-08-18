<div align="right">
  <a href="README.md">🇬🇧 English</a> | <strong>🇨🇳 简体中文</strong>
</div>

**页脉** 是一款专为重度标签页用户打造的极致效率工具。无论你开启了几个还是上万个标签页，它都能依靠底层的 O(1) 算法与时间切片技术保持丝滑流畅。通过关系树、正则搜索、智能关键词聚类、结构化导入导出以及原生标签组的完美适配，帮你彻底告别杂乱。

[![Mozilla Add-on Version](https://img.shields.io/amo/v/tabnexus-manager)
](https://addons.mozilla.org/zh-CN/firefox/addon/tabnexus-manager/)
[![Chrome](https://img.shields.io/chrome-web-store/v/fjcobbonfbjbkkaipjgiakajanmbdlcp
)](https://chromewebstore.google.com/detail/tabnexus/fjcobbonfbjbkkaipjgiakajanmbdlcp?authuser=0&hl=zh-CN)
[![Edge](https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fjhlkccgdibakamahnlclnmdgkhchngnd)](https://microsoftedge.microsoft.com/addons/detail/tabnexus/jhlkccgdibakamahnlclnmdgkhchngnd?hl=zh-CN)

✨ **核心功能特性**：

* **🗂️ 原生标签组与容器适配**：全平台完美接入原生标签组（Tab Groups），以消除外边距的连续垂直彩带呈现视觉分组；独创极简无箭头折叠交互，且**支持面板与浏览器原生折叠状态的双向实时同步**。此外，Firefox 版独家支持 Container 容器标识，采用“从无到有”的柔和渐变背景色渲染，将美感与实用性完美结合。
* **🌲 关系树面板 (Tree View)**：自动追踪并构建标签页的父子派生关系，轻松理清几十个串联的查阅线索。**导入/导出时可完美保留并重组完整的树状层级**。*(注：Chromium 版独家搭载“爷爷节点自动继承”守护机制以防树结构断裂；Firefox 版则依托其强大的原生关系追踪引擎。)*
* **🔍 智能搜索与筛选**：支持对标题和 URL 的原生**正则表达式搜索**，并可一键按最近访问时间排序。
* **🏷️ 关键词自动聚类**：后台静默分析所有标签页标题，利用底半衰减算法生成无重叠的“词频分组”，点击即可极速过滤分类。
* **💾 极速且结构化的导入/导出**：将搜索匹配的标签页（含父子层级关系）导出为 JSON 备份。支持静默、分块加载导入庞大列表，导入的页面默认处于**零内存占用的休眠状态**（Firefox 依托原生休眠机制，Chromium 采用独创的轻量代理页模拟）。
* **🚧 智能受限网页拦截**：针对浏览器安全策略**不允许直接加载的页面（如本地 `file:///` 或 `chrome://` 特权内部页），系统会自动将其安全转为带有 `[受限]` 标记的专属占位页面**，确保历史数据绝不静默丢失。
* **⏱️ 沉浸式历史穿梭**：长按界面左上角的前进/后退按钮，即可唤出无限制的“标签页访问历史列表”，方便随时定位回溯。
* **🛠️ 全能操作区**：提供一键定位、固定/取消固定、刷新、复制链接、批量关闭未固定项等强力批处理功能，**并支持在关系树弹窗中直接提取导出特定分支结构**。
* **🖥️ 独立窗口模式**：支持一键脱离为主浏览器之外的独立管理窗口，方便双屏或多屏协同工作。

🛡️ **隐私与性能**：
100% 纯本地运行，**0 数据收集，无跟踪代码**。原生自适应支持**中文/英文**双语界面与操作系统的深色/浅色模式。

## ☕ 赞助与支持
如果您觉得这个脚本节省了您的时间，或者单纯想支持一下开发工作，欢迎通过以下方式请作者喝杯咖啡：
*   [**爱发电 (Afdian)**](https://afdian.com/a/aghinouz) | [**Ko-fi**](https://ko-fi.com/aghinouz) | [**Patreon**](https://patreon.com/aghinouz)
