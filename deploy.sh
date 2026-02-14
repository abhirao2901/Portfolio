#!/bin/bash

echo "🚀 Deploying React Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building production bundle..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🔗 Your portfolio will be live at: https://abhirao2901.github.io/portfolio"
echo "⏰ It may take a few minutes for changes to appear."
