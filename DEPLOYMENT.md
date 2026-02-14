# Production Deployment Checklist

## Pre-Deployment

- [ ] Test responsive design across devices
- [ ] Verify all links work correctly
- [ ] Check accessibility with screen reader
- [ ] Test keyboard navigation
- [ ] Validate HTML structure
- [ ] Run Lighthouse audit (target 95+ scores)
- [ ] Test lazy loading functionality
- [ ] Verify analytics tracking (if implemented)

## Build Optimization

- [ ] Run `npm run build`
- [ ] Analyze bundle size: `npx webpack-bundle-analyzer build/static/js/*.js`
- [ ] Check for unused dependencies
- [ ] Verify code splitting is working
- [ ] Test production build locally: `npx serve -s build`

## SEO & Performance

- [ ] Update meta tags in public/index.html
- [ ] Add robots.txt
- [ ] Generate sitemap.xml
- [ ] Test Core Web Vitals
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Check mobile usability

## Hosting Setup

- [ ] Configure custom domain (if applicable)
- [ ] Set up HTTPS
- [ ] Configure redirects (www to non-www)
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Add performance monitoring

## Post-Deployment

- [ ] Test all functionality on live site
- [ ] Verify performance metrics
- [ ] Submit to Google Search Console
- [ ] Test on multiple devices and browsers
- [ ] Set up uptime monitoring
- [ ] Document any issues for future reference
