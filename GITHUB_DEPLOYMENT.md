# 🚀 Deploy React Portfolio to GitHub Pages

## Prerequisites
- Git installed on your system
- GitHub account: `abhirao2901`
- Node.js and npm installed

## 📋 Step-by-Step Deployment

### 1️⃣ Install Dependencies
```bash
cd "c:\Users\akumarr6\Downloads\resume"
npm install
```

### 2️⃣ Create GitHub Repository
1. Go to https://github.com/abhirao2901
2. Click "New Repository" (green button)
3. Repository name: `portfolio`
4. Description: `Senior Frontend Engineer Portfolio - React.js + Tailwind CSS`
5. Set to **Public**
6. ✅ **DO NOT** initialize with README, .gitignore, or license
7. Click "Create Repository"

### 3️⃣ Initialize Git and Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Production-ready React portfolio"

# Add GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/abhirao2901/portfolio.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4️⃣ Deploy to GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy
```

**Alternative: Use deployment script**
```bash
# On Windows
deploy.bat

# On Mac/Linux
chmod +x deploy.sh
./deploy.sh
```

### 5️⃣ Configure GitHub Pages (Manual Step)
1. Go to https://github.com/abhirao2901/portfolio
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Source: **Deploy from a branch**
5. Branch: **gh-pages** (auto-created by gh-pages package)
6. Folder: **/ (root)**
7. Click **Save**

## 🌐 Live Site URL
**Your portfolio will be live at:**
```
https://abhirao2901.github.io/portfolio
```

## 🔄 Update Deployment (Future Changes)

### Option A: Quick Update
```bash
# After making changes to your code
npm run deploy
```

### Option B: Full Git Workflow
```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin main

# Deploy updated version
npm run deploy
```

## ✅ Production Verification Checklist
- [ ] Site loads at https://abhirao2901.github.io/portfolio
- [ ] All sections display correctly
- [ ] Mobile responsive design works
- [ ] Contact links are functional
- [ ] No console errors in browser
- [ ] Lighthouse score 90+ (Performance, SEO, Accessibility)

## 📝 Add to Resume & LinkedIn

### For Resume
```
Portfolio: https://abhirao2901.github.io/portfolio
GitHub: https://github.com/abhirao2901
```

### For LinkedIn Profile
1. **Profile Summary**: Add portfolio link
2. **Contact Info**: Add website URL
3. **Featured Section**: Add your portfolio as a featured link

### Copy-Paste Ready Links
```
🌐 Portfolio: https://abhirao2901.github.io/portfolio
💻 Source Code: https://github.com/abhirao2901/portfolio
👨‍💻 GitHub Profile: https://github.com/abhirao2901
```

## 🛠 Troubleshooting

### Common Issues:

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Deployment Fails:**
```bash
# Check git remote
git remote -v

# Re-add if needed
git remote set-url origin https://github.com/abhirao2901/portfolio.git
```

**Site Shows 404:**
- Wait 5-10 minutes for GitHub Pages to update
- Check GitHub Pages settings in repository
- Ensure homepage in package.json matches repo name

**Wrong URL/Routing:**
- Verify homepage field: `"homepage": "https://abhirao2901.github.io/portfolio"`
- Rebuild and redeploy: `npm run deploy`

## 🎯 Success Metrics
✅ **Live URL**: https://abhirao2901.github.io/portfolio  
✅ **Mobile Responsive**: Works on all devices  
✅ **Fast Loading**: < 2 seconds initial load  
✅ **Professional**: Ready for resume and LinkedIn  
✅ **SEO Optimized**: Discoverable by recruiters  

---

**Next Steps:**
1. Share the live URL on your resume
2. Add to LinkedIn profile
3. Include in email signatures
4. Share with your network

Your portfolio is now live and ready to impress recruiters! 🎉
