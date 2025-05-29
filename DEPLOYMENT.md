# 🚀 Deployment Guide

This guide covers multiple deployment options for the Minimal Typing Test application.

## 📋 Prerequisites

- Git repository with your typing test code
- GitHub account (for GitHub Pages)
- Domain name (optional, for custom domains)

## 🌐 Deployment Options

### 1. GitHub Pages (Recommended)

GitHub Pages offers free hosting directly from your repository.

#### Setup Steps:

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/minimal-typing-test.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your site:**
   - Your typing test will be available at: `https://yourusername.github.io/minimal-typing-test`
   - It may take a few minutes to become available

#### Custom Domain (Optional):
```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Netlify

Netlify provides excellent performance and easy deployment.

#### Manual Deployment:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!

#### Git Integration:
1. Connect your GitHub repository
2. Build settings:
   - Build command: `echo "No build needed"`
   - Publish directory: `.`
3. Deploy automatically on every commit

### 3. Vercel

Vercel offers fast global CDN deployment.

#### Steps:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site is deployed!

#### Or use the web interface:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings

### 4. Firebase Hosting

Google Firebase offers robust hosting with SSL.

#### Setup:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### 5. Surge.sh

Simple static hosting from the command line.

#### Steps:
```bash
npm install -g surge
surge
```

## ⚙️ Configuration Files

### Netlify (_netlify.toml)
```toml
[build]
  publish = "."
  command = "echo 'No build step needed'"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

### Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🔒 Security Headers

Add these security headers for production:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:;">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

## 📈 Performance Optimization

### Enable Compression:
Most hosting platforms automatically enable gzip compression.

### CDN Configuration:
- GitHub Pages: Automatically uses GitHub's CDN
- Netlify: Global CDN included
- Vercel: Edge network included

### Caching Strategy:
```
index.html: no-cache
*.css, *.js: 1 year cache
fonts: 1 year cache
```

## 🎯 Custom Domain Setup

### DNS Configuration:
For `www.yourdomain.com`:
```
CNAME www yourusername.github.io
```

For apex domain `yourdomain.com`:
```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error:**
   - Check if files are in the correct directory
   - Verify index.html is in the root

2. **CSS/JS Not Loading:**
   - Check file paths (use relative paths)
   - Verify files are committed to git

3. **Fonts Not Loading:**
   - Ensure Google Fonts CDN is accessible
   - Check Content Security Policy

4. **Chart.js Issues:**
   - Verify Chart.js CDN is loading
   - Check browser console for errors

## 🚀 Production Checklist

- [ ] All files committed and pushed
- [ ] Domain configured (if using custom domain)
- [ ] Security headers implemented
- [ ] Performance tested
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility checked
- [ ] Analytics setup (if desired)
- [ ] Backup plan in place

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Verify all files are properly uploaded
3. Test locally first using the test-runner.bat
4. Check browser console for errors

---

**Your typing test is now ready for the world! 🎉** 