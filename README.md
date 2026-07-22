# Loisingha College +2 First Year Induction Programme 2026
## Selfie Booth Web Application

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Vanilla JS](https://img.shields.io/badge/vanilla-JavaScript-yellow.svg)

A production-ready, responsive selfie booth web application for Loisingha College's induction programme. Students can capture selfies with a custom frame overlay, preview the image, and download high-quality photos.

## ✨ Features

✅ **Pure Client-Side Application** - No backend required  
✅ **GitHub Pages Ready** - Deploy directly to GitHub Pages  
✅ **Mobile-First Design** - Optimized for smartphones and tablets  
✅ **Responsive Layout** - Works on all screen sizes and orientations  
✅ **Camera Integration** - HTML5 getUserMedia API  
✅ **Frame Overlay** - Custom transparent PNG frame  
✅ **Image Merging** - Canvas API for combining images  
✅ **3-Second Countdown** - Professional capture experience  
✅ **High-Quality Output** - JPEG download with metadata  
✅ **Glassmorphism UI** - Modern design with backdrop blur effects  
✅ **Blue & White Theme** - College branding colors  
✅ **Error Handling** - Comprehensive error messages  
✅ **Keyboard Shortcuts** - Spacebar to capture, Escape to go back  
✅ **Cross-Browser Support** - Chrome, Firefox, Safari, Edge  
✅ **No External Dependencies** - 100% vanilla JavaScript

## 🎯 Use Cases

1. **College Induction Programs** - Capture memories during orientation
2. **Events & Conferences** - Create branded selfies with custom frames
3. **Photo Booths** - Self-service digital photo booth
4. **Promotional Campaigns** - Generate shareable social media content
5. **Alumni Events** - Create event-specific photo memories

## 📱 Supported Devices

- 📲 **Android Phones** (Chrome, Firefox, Edge)
- 🍎 **iPhones** (Safari, Chrome)
- 📱 **Tablets** (iPad, Android tablets)
- 💻 **Desktop Browsers** (Chrome, Firefox, Safari, Edge)
- 🖥️ **Large Screens** (Optimized layout)

## 🚀 Quick Start

### 1. Clone or Download the Repository

```bash
git clone https://github.com/abhisekdashwoym/loisingha-selfie-booth.git
cd loisingha-selfie-booth
```

### 2. Local Testing

For local testing, use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx http-server

# Node.js (http-server package)
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

**Note:** Camera access requires HTTPS or localhost. HTTP will not work for getUserMedia.

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Web Interface

1. Create a new repository named `loisingha-selfie-booth`
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be available at: `https://yourusername.github.io/loisingha-selfie-booth`

#### Option B: Using Git Command Line

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Loisingha College Selfie Booth"
git branch -M main
git remote add origin https://github.com/yourusername/loisingha-selfie-booth.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📁 Project Structure

```
loisingha-selfie-booth/
├── index.html          # Main HTML structure
├── style.css           # Complete responsive styling
├── script.js           # Vanilla JavaScript application logic
├── sw.js               # Service Worker (optional)
├── assets/
│   ├── frame.png       # Selfie frame overlay (transparent PNG)
│   └── logo.png        # College logo
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🎨 Customization

### 1. Replace College Logo

Replace `assets/logo.png` with your college logo (recommended: 200x200px, transparent PNG).

```html
<!-- In index.html -->
<img src="assets/logo.png" alt="College Logo" class="college-logo">
```

### 2. Replace Selfie Frame

Replace `assets/frame.png` with your custom frame (recommended: 1280x720px, transparent PNG).

**To create a custom frame:**
- Use Photoshop, GIMP, Canva, or online tools
- Keep background transparent (PNG with alpha channel)
- Dimensions: 1280x720px (or any 16:9 aspect ratio)
- File format: PNG with transparency

### 3. Update Event Details

Edit the following variables in `script.js`:

```javascript
const AppState = {
    eventName: '+2 First Year Induction Programme',
    collegeName: 'Loisingha College',
    eventYear: '2026'
};
```

### 4. Update College Name and Titles

In `index.html`, update:

```html
<h1 class="college-title">+2 First Year Induction Programme</h1>
<h2 class="college-year">2026</h2>
<p class="college-subtitle">Welcome to Loisingha College</p>
<title>Loisingha College Selfie Booth 2026</title>
```

### 5. Customize Colors

Edit CSS variables in `style.css`:

```css
:root {
    /* Primary color (blue) */
    --primary-color: #1e3a8a;
    --primary-light: #3b82f6;
    
    /* Change to your brand colors */
    --accent-color: #60a5fa;
}
```

### 6. Update Meta Tags for SEO

In `index.html` `<head>` section:

```html
<meta name="description" content="Your custom description">
<meta name="theme-color" content="#1e3a8a">
<title>Your Event Name</title>
```

## 🔧 Advanced Configuration

### Adjust Image Quality

In `script.js`, find the `processAndShowPreview()` function:

```javascript
// Increase scale for higher quality (but larger file size)
const scale = 2; // Change to 1, 2, 3, or 4

// Adjust JPEG quality (0-1)
canvas.toDataURL('image/jpeg', 0.95); // 0.95 = 95% quality
```

### Adjust Camera Constraints

In `script.js`, `initializeCamera()` function:

```javascript
const constraints = {
    video: {
        facingMode: 'user',
        width: { ideal: 1280 },  // Adjust resolution
        height: { ideal: 720 }
    },
    audio: false
};
```

### Customize Countdown Duration

In `script.js`, `startCountdown()` function:

```javascript
let count = 3; // Change to 5 for 5-second countdown
```

## 📸 Usage Instructions for Users

1. **Open the Website** - Scan QR code or click the link
2. **Click "Start Camera"** - Grant camera permission if prompted
3. **Frame Your Shot** - Position yourself in the center
4. **Click Capture Button** - 3-second countdown begins
5. **Review Photo** - Preview appears after capture
6. **Download or Retake** - Download the photo or try again

## 🔐 Security & Privacy

- ✅ No data is sent to any server
- ✅ Camera access is local and secure
- ✅ Photos are only stored on the user's device
- ✅ No tracking or analytics
- ✅ HTTPS recommended for production

## 🌐 Browser Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome  | ✅      | ✅     |
| Firefox | ✅      | ✅     |
| Safari  | ✅      | ✅     |
| Edge    | ✅      | ✅     |
| Opera   | ✅      | ✅     |

**Requirements:**
- HTTPS (or localhost)
- Modern browser with getUserMedia API support
- Camera hardware

## 📝 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Spacebar` | Capture photo |
| `Escape` | Go back to home |

## 🐛 Troubleshooting

### Camera Not Working

**Problem:** "Camera permission denied" or "No camera found"

**Solutions:**
1. Check browser permissions - Chrome/Firefox → Address bar icon → Camera
2. Ensure using HTTPS (or localhost for development)
3. Restart browser and try again
4. Check if camera is being used by another app
5. Try a different browser

### Photo Looks Stretched

**Problem:** Image appears distorted

**Solutions:**
1. Ensure your frame.png is 1280x720px or 16:9 aspect ratio
2. Check image scaling settings in CSS
3. Clear browser cache and reload

### Photo Downloads Slowly

**Problem:** Download takes a long time

**Solutions:**
1. Reduce image quality in `script.js` (change 0.95 to 0.85)
2. Reduce scale factor (change from 2 to 1)
3. Check your internet connection

### Frame Not Showing

**Problem:** Frame overlay is missing

**Solutions:**
1. Ensure `assets/frame.png` exists
2. Check file path in `index.html`
3. Verify PNG has transparency (not white background)
4. Check browser console for errors (F12)

## 📊 Performance Optimization

- **Lazy Loading:** Images load only when needed
- **Canvas Scaling:** High-resolution output with client-side rendering
- **Minimal Dependencies:** Pure JavaScript, no external libraries
- **Responsive Images:** Optimized for all screen sizes
- **Service Worker:** Optional offline support (uncomment in script.js)

## 🎓 Learning Resources

- [MDN - getUserMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Web Audio & Media APIs](https://www.w3.org/TR/mediacapture-streams/)

## 📄 License

MIT License - Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review browser console (F12) for errors
3. Check GitHub Issues
4. Create a new issue with detailed description

## 🙏 Acknowledgments

- Loisingha College administration for the inspiration
- Modern web standards (HTML5, CSS3, ES6+)
- Open-source community contributions

## 📈 Future Enhancements

- [ ] Multiple frame options selector
- [ ] Real-time filters
- [ ] Social media sharing integration
- [ ] Photo gallery/slideshow
- [ ] Batch photo management
- [ ] Cloud storage integration
- [ ] QR code generation for sharing
- [ ] Analytics dashboard

## 📜 Changelog

### Version 1.0.0 (2026-07-22)
- ✨ Initial release
- 📸 Camera capture functionality
- 🖼️ Frame overlay system
- 📥 Photo download feature
- 📱 Fully responsive design
- 🎨 Glassmorphism UI
- ♿ Accessibility support

---

**Built with ❤️ for Loisingha College**

*Last Updated: July 22, 2026*
*Repository: https://github.com/abhisekdashwoym/loisingha-selfie-booth*