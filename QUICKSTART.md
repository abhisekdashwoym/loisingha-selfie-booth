# Quick Start Guide - Loisingha College Selfie Booth

## 🚀 Start Using in 5 Minutes

### Option 1: GitHub Pages (Recommended)

**Step 1: Generate Frame**
1. Download `generate-frame.html` from repository
2. Open it in any web browser
3. Click "Generate Frame"
4. Click "Download as PNG"
5. This creates your `frame.png` file

**Step 2: Create Assets Folder**
```bash
mkdir assets
# Move frame.png to assets/frame.png
# Add your college logo as assets/logo.png
```

**Step 3: Upload to GitHub**
```bash
git add assets/
git commit -m "Add frame and logo assets"
git push origin main
```

**Step 4: Enable GitHub Pages**
- Repository Settings → Pages
- Select `main` branch, `/` (root) folder
- Save
- Visit: `https://yourusername.github.io/loisingha-selfie-booth`

### Option 2: Local Testing

```bash
# Start a local server
python -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000

# Or with Node.js
npx http-server

# Open: http://localhost:8000
```

## 📱 Usage for Students

1. **Open Link/Scan QR Code** → Website loads
2. **Click "Start Camera"** → Grant permission if prompted
3. **Frame Your Selfie** → Position yourself in center
4. **Click Capture Button** → 3-second countdown
5. **Auto-Capture** → Photo taken with frame overlay
6. **Preview** → Review your photo
7. **Download** → Save to device or retake

## 🎨 Customize in 3 Steps

### 1. Replace Logo
```bash
# Add your college logo as:
# assets/logo.png (recommended: 200x200px PNG)
```

### 2. Generate/Replace Frame
```bash
# Option A: Use frame generator
# Open generate-frame.html → Download PNG

# Option B: Use custom frame
# Create/edit in Photoshop/GIMP/Canva
# Save as: assets/frame.png (1280x720px PNG)
```

### 3. Update Event Details
```javascript
// Edit script.js - Line ~20:
const AppState = {
    eventName: '+2 First Year Induction Programme',
    collegeName: 'Loisingha College',
    eventYear: '2026'
};
```

## 🔧 Troubleshooting

**Camera not working?**
- ✅ Using HTTPS or localhost
- ✅ Browser permissions granted
- ✅ Camera hardware available
- ✅ Try different browser

**Frame not showing?**
- ✅ `assets/frame.png` exists
- ✅ File path is correct
- ✅ PNG has transparency
- ✅ Check browser console (F12)

**Photo looks odd?**
- ✅ Frame is 1280x720px (16:9 ratio)
- ✅ Logo is properly placed
- ✅ PNG files aren't corrupted

## 📊 Project Structure

```
.
├── index.html              # Main app
├── style.css              # Styling
├── script.js              # Logic
├── sw.js                  # Service Worker (offline support)
├── generate-frame.html    # Frame generator tool
├── README.md              # Full documentation
├── DEPLOYMENT.md          # GitHub Pages guide
├── LICENSE                # MIT License
├── CONTRIBUTING.md        # Contribution guide
├── QUICKSTART.md          # This file
└── assets/
    ├── frame.png          # Selfie frame overlay
    └── logo.png           # College logo
```

## 📲 Deploy & Share

**GitHub Pages URL:**
```
https://yourusername.github.io/loisingha-selfie-booth
```

**Create QR Code:**
1. Go to [qr-code-generator.com](https://qr-code-generator.com/)
2. Paste your GitHub Pages URL
3. Download QR code
4. Print or share digitally

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Spacebar` | Capture photo |
| `Escape` | Go back |

## ✨ Features at a Glance

✅ Pure HTML/CSS/JavaScript  
✅ No backend required  
✅ Works on GitHub Pages  
✅ Mobile-first responsive  
✅ Cross-browser compatible  
✅ Camera API integration  
✅ Canvas image merging  
✅ High-quality JPEG download  
✅ 3-second countdown  
✅ Glassmorphism UI  
✅ Error handling  
✅ Keyboard shortcuts  

## 🎓 Learning Resources

- [HTML5 Camera API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [GitHub Pages](https://pages.github.com/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 💡 Tips

1. **Better Photos**: Ensure good lighting for clearer selfies
2. **Faster Downloads**: Reduce canvas scale from 2 to 1 in script.js
3. **Custom Colors**: Edit CSS variables in style.css
4. **Multiple Frames**: Duplicate project and customize each version
5. **Offline Mode**: Service worker enables offline functionality

## 📞 Support

**Issues?**
1. Check Troubleshooting section
2. Review browser console (F12) for errors
3. Check GitHub Issues
4. Create detailed GitHub issue

## 🎉 You're Ready!

Your selfie booth is ready to use. Share the link with students and watch them capture amazing memories!

---

**Need Help?** Check README.md for comprehensive documentation

**Want to Contribute?** See CONTRIBUTING.md

**Deploy Questions?** See DEPLOYMENT.md
