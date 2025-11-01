# Universal Scratchpad Browser Extension

A simple, elegant browser extension for Chromium-based browsers (Chrome, Edge, Brave, Opera, etc.) that allows you to write and store notes with automatic debounced saving.

## Features

- ✨ **Auto-save**: Automatically saves your content after you stop typing (500ms debounce)
- 💾 **Persistent Storage**: Content is saved locally using Chrome Storage API
- 🎨 **Modern UI**: Clean, minimal interface with status indicators
- ⚡ **Fast & Lightweight**: Minimal resource usage
- 🔒 **Privacy**: All data stored locally, never sent to external servers
- 📑 **Tab Support**: Open scratchpad in a full browser tab for extended writing sessions

## Installation

### Quick Start (without custom icons):

1. Download or clone this repository
2. **Option A**: Use `manifest-no-icons.json` (rename to `manifest.json`) if you don't have icons yet
3. Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/` for Edge)
4. Enable "Developer mode" (toggle in top-right corner)
5. Click "Load unpacked"
6. Select the folder containing this extension

### Full Installation (with custom icons):

1. Generate icons using `generate-icons.html` (see Icon Generation below)
2. Place icons in the `icons/` directory
3. Use the default `manifest.json`
4. Follow steps 3-5 above

### For Development:

1. Make changes to the files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card to reload changes

## Usage

1. Click the extension icon in your browser toolbar
2. Start typing in the textarea
3. Content automatically saves after you stop typing for 500ms
4. Status indicator shows current state:
   - 🟢 Green: Ready/Saved
   - 🟡 Yellow: Saving...
   - 🔴 Red: Error
5. Click "Open in Tab" to open a full-page version in a new browser tab

## File Structure

```
browser-extension-scratchpad/
├── manifest.json         # Extension configuration
├── popup.html            # Extension popup UI
├── popup.css             # Styles for the popup
├── popup.js              # Main logic with debounced save
├── tab.html              # Full-page tab version
├── tab.css               # Styles for tab version
├── tab.js                # Logic for tab version
├── icons/                # Extension icons (optional)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── generate-icons.html   # Helper to generate icons
└── README.md             # This file
```

### Generating Icons

Icons are optional - the extension will work without them (browser will show default icon). To generate icons:

1. Open `generate-icons.html` in your browser
2. Right-click each canvas and save as PNG with the corresponding filename
3. Place them in the `icons/` directory

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Storage**: Uses `chrome.storage.local` API
- **Debounce Delay**: 500ms (configurable in `popup.js`)
- **Browser Support**: All Chromium-based browsers (Chrome, Edge, Brave, Opera, Vivaldi, etc.)

## Customization

### Change Debounce Delay

Edit `popup.js` and modify the `DEBOUNCE_DELAY` constant:

```javascript
const DEBOUNCE_DELAY = 1000; // Change to 1000ms (1 second)
```

### Change Storage Key

Edit `popup.js` and modify the `STORAGE_KEY` constant:

```javascript
const STORAGE_KEY = 'my_custom_key';
```

## License

MIT License - Feel free to use and modify as needed!

