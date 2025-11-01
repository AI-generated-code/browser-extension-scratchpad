#!/bin/bash

# Setup script for Universal Scratchpad Extension
# This script helps set up the extension with icons

echo "Universal Scratchpad Extension Setup"
echo "===================================="
echo ""

# Check if icons directory exists
if [ ! -d "icons" ]; then
    echo "Creating icons directory..."
    mkdir -p icons
fi

# Check if icons exist
if [ ! -f "icons/icon16.png" ] || [ ! -f "icons/icon48.png" ] || [ ! -f "icons/icon128.png" ]; then
    echo "⚠️  Icons not found!"
    echo ""
    echo "To generate icons:"
    echo "1. Open 'generate-icons.html' in your browser"
    echo "2. Right-click each canvas and save as PNG"
    echo "3. Save them in the icons/ directory as:"
    echo "   - icon16.png"
    echo "   - icon48.png"
    echo "   - icon128.png"
    echo ""
    echo "Alternatively, you can:"
    echo "1. Edit manifest.json and remove icon references"
    echo "2. Chrome will use a default icon"
    echo ""
else
    echo "✅ Icons found!"
fi

echo ""
echo "To install the extension:"
echo "1. Open Chrome/Edge and go to chrome://extensions/ (or edge://extensions/)"
echo "2. Enable 'Developer mode'"
echo "3. Click 'Load unpacked'"
echo "4. Select this directory: $(pwd)"
echo ""
echo "Extension is ready to use!"

