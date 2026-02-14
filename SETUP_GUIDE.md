# SETUP_GUIDE.md

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Setup Steps](#local-setup-steps)
3. [Building the Project](#building-the-project)
4. [Deploying to GitHub Pages](#deploying-to-github-pages)
5. [Verifying the Deployment](#verifying-the-deployment)
6. [Troubleshooting Common Issues](#troubleshooting-common-issues)
7. [Links to Live Portfolio After Deployment](#links-to-live-portfolio-after-deployment)

---

## Prerequisites
Before starting the setup, ensure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

To verify if Node.js is installed, run the following command in your terminal:
```bash
node -v
```
This will display the installed version of Node.js. If you see an error, please install Node.js first.

## Local Setup Steps
1. **Clone the Repository**: Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/abhirao2901/Portfolio.git
   ```
   This command downloads the Portfolio repository to your local machine.

2. **Navigate to the Project Directory**: Change into the directory:
   ```bash
   cd Portfolio
   ```
   This command moves you into the cloned project directory.

3. **Install Dependencies**: Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```
   This command reads the `package.json` file and installs all required packages for the project.

## Building the Project
To create a production-ready build of your project, use the following command:
```bash
npm run build
```
This command compiles your source files into a distribution folder, making them ready for deployment.

## Deploying to GitHub Pages
1. **Install GitHub Pages Package**: If this package is not installed, run:
   ```bash
   npm install gh-pages --save-dev
   ```
   This installs the `gh-pages` package, which simplifies deployment.

2. **Add Deployment Scripts**: Open `package.json` and add the following scripts under the `scripts` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   This configures the deployment process.

3. **Deploy the Project**: Finally, run:
   ```bash
   npm run deploy
   ```
   This command builds your project and deploys it to GitHub Pages automatically.

## Verifying the Deployment
After deployment, open your browser and navigate to:
```plaintext
https://abhirao2901.github.io/Portfolio/
```
This URL should display your live portfolio.

## Troubleshooting Common Issues
- **Deployment Failed**: Double-check your `package.json` scripts for typos.
- **Not Found Error**: Ensure your GitHub repository name and username are correct.
- **Build Errors**: Review the terminal output for specific error messages and address them accordingly.

## Links to Live Portfolio After Deployment
- [Live Portfolio](https://abhirao2901.github.io/Portfolio)