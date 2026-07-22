# Deployment Guide for GitHub Pages

## Prerequisites

- GitHub account
- Git installed on your computer
- All project files ready

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Name it: `loisingha-selfie-booth`
5. Add description: "Loisingha College +2 First Year Induction Programme Selfie Booth"
6. Choose **Public** (required for GitHub Pages)
7. Click **Create repository**

## Step 2: Clone the Repository Locally

```bash
git clone https://github.com/yourusername/loisingha-selfie-booth.git
cd loisingha-selfie-booth
```

## Step 3: Add Your Files

Copy all project files into the repository directory:

```
loisingha-selfie-booth/
├── index.html
├── style.css
├── script.js
├── sw.js
├── generate-frame.html
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── DEPLOYMENT.md
├── .gitignore
└── assets/
    ├── frame.png
    └── logo.png
```

## Step 4: Create .gitignore

```bash
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
echo "dist/" >> .gitignore
```

## Step 5: Generate Images

### Option A: Use Online Generator
1. Open `generate-frame.html` in a web browser
2. Click "Generate Frame"
3. Click "Download as PNG"
4. Create `assets` folder in your project
5. Move downloaded `frame.png` to `assets/frame.png`

### Option B: Create Frame in Photoshop/GIMP
1. Dimensions: 1280x720px
2. Make background transparent
3. Add college branding and induction theme
4. Export as PNG
5. Save to `assets/frame.png`

### Logo File
1. Get your college logo (or create placeholder)
2. Recommended size: 200x200px
3. Format: PNG with transparency
4. Save to `assets/logo.png`

## Step 6: Commit and Push

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Loisingha College Selfie Booth"

# Push to GitHub
git push -u origin main
```

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 8: Access Your Website

Your site will be available at:
```
https://yourusername.github.io/loisingha-selfie-booth
```

⏳ It may take 1-2 minutes for the site to go live.

## Step 9: Share the Link

- Copy the URL
- Create a QR code using [QR Code Generator](https://qr-code-generator.com/)
- Share via email, WhatsApp, or print materials

## Updates and Maintenance

### Making Changes Locally

```bash
# Make edits to files
# Then:

git add .
git commit -m "Description of changes"
git push origin main
```

Changes typically appear within 1-2 minutes.

### Customizing Your Deployment

#### Custom Domain (Optional)

1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. In repository **Settings** > **Pages**
3. Under "Custom domain", enter your domain
4. Configure DNS records at your domain provider
5. Point to: `yourusername.github.io`

#### HTTPS (Automatic)

GitHub Pages automatically provides HTTPS. To enable:
1. Go to **Settings** > **Pages**
2. Check **Enforce HTTPS** (should be auto-enabled)

## Troubleshooting

### Site Not Live
- Wait 1-2 minutes
- Verify branch is set to `main` in GitHub Pages settings
- Check repository visibility is **Public**

### Assets Not Loading
- Verify file paths match exactly
- Check `assets/frame.png` and `assets/logo.png` exist
- Ensure file extensions are lowercase

### Camera Not Working
- Must use HTTPS (GitHub Pages provides this)
- Check browser permissions
- Verify camera hardware exists
- Test in different browser

### Performance Issues
- Optimize image sizes
- Reduce canvas resolution if needed
- Check network speed

## Backup & Version Control

### Create Backup Branch

```bash
git branch backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

### View Commit History

```bash
git log --oneline
```

### Revert Changes

```bash
git revert <commit-hash>
git push origin main
```

## Performance Optimization

### Reduce Asset Sizes

```bash
# Optimize PNG files
png-crush -brute assets/frame.png
png-crush -brute assets/logo.png
```

### Enable Caching

GitHub Pages automatically caches static assets. For custom caching:
1. Create `_config.yml`
2. Add appropriate cache-control headers

## Monitoring

### GitHub Actions (Optional)

Monitor deployment:
1. Go to **Actions** tab
2. View build/deployment status
3. Check build logs for errors

### Analytics (Optional)

Add Google Analytics:
1. Sign up at [google.com/analytics](https://analytics.google.com)
2. Create property for your domain
3. Add tracking code to `index.html` `<head>`

## Security

✅ **Best Practices Implemented:**
- No sensitive data in code
- No API keys or credentials
- HTTPS enforced
- No server-side processing
- Camera permissions handled by browser

## Support

For deployment issues:
1. Check GitHub Pages documentation: https://pages.github.com
2. Review this guide
3. Check browser console (F12) for errors
4. Create GitHub issue with details

---

**Last Updated:** July 22, 2026
**Status:** Ready for production deployment
