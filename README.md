<div align="right">
  <strong>🇬🇧 English</strong> | <a href="README_zh.md">🇨🇳 简体中文</a>
</div>

**TabNexus** is an ultimate productivity tool designed for tab hoarders. Whether you have 10 or 10,000 tabs open, it stays buttery smooth thanks to its underlying O(1) caching and time-slicing engine. Regain control over your browser with relation trees, regex search, smart keyword clustering, and seamless structural import/export.

✨ **Core Features**:

* **🌲 Tree View**: Automatically tracks parent-child derivation of your tabs, making sense of complex research trails. **Tree hierarchies are now fully preserved during export and flawlessly reconstructed upon import.** *(Note: The Chromium version features an exclusive "grandparent inheritance" engine to prevent broken trees; the Firefox version utilizes its robust native relationship API).*
* **🔍 Smart Search & Filter**: Supports native **Regex search** for titles and URLs, alongside chronological sorting for recently accessed tabs.
* **🏷️ Auto Keyword Clustering**: Silently analyzes all tab titles in the background to generate non-overlapping "frequency groups", letting you filter massive lists with a single click.
* **💾 Fast & Structural Import/Export**: Backup your currently matched tabs—along with their exact hierarchies—to JSON. Import massive lists via silent background loading. Imported tabs are created in a **zero-memory suspended state** (Firefox uses native APIs; Chromium uses a custom lightweight proxy page).
* **🚧 Smart Restricted Page Fallback**: Pages restricted by browser security policies (such as local `file:///` paths or internal `chrome://` pages) are **gracefully converted into safe `[Restricted]` placeholders**. This ensures your saved sessions are restored without silent data loss.
* **⏱️ Immersive History Navigation**: Long-press the back/forward buttons to reveal an infinite history dropdown, letting you instantly jump back to recently visited tabs.
* **🛠️ Quick Actions**: Locate, Pin/Unpin, Refresh, Copy Links, batch close unpinned tabs, and **a dedicated export button within the Tree View modal** to extract specific branch structures.
* **🖥️ Standalone Mode**: Pop out the manager into a dedicated window for persistent management across multiple monitors.

🛡️ **Privacy & Performance**:
100% local processing. **Zero data collection, no trackers.** Natively supports **English and Chinese** depending on your browser language, with full support for system Dark/Light modes.

## ☕ Support the Author
If you find this script helpful and it saves you time managing your torrents, consider supporting the development!
*   [**爱发电 (Afdian)**](https://afdian.com/a/aghinouz) | [**Ko-fi**](https://ko-fi.com/aghinouz) | [**Patreon**](https://patreon.com/aghinouz)