@echo off
echo 🚀 Deploying React Portfolio to GitHub Pages...

echo 📦 Building production bundle...
call npm run build

echo 🌐 Deploying to GitHub Pages...
call npm run deploy

echo ✅ Deployment complete!
echo 🔗 Your portfolio will be live at: https://abhirao2901.github.io/portfolio
echo ⏰ It may take a few minutes for changes to appear.
