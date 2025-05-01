# Anime.js Animation Project

This repository contains a simple demonstration of the Anime.js JavaScript animation library.

## Prerequisites

Before starting, you'll need to have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation Steps

### 1. Install Node.js and npm

For Linux:
```bash
sudo apt update
sudo apt install nodejs npm
```

For Windows:
Download and install from [nodejs.org](https://nodejs.org/).

Verify the installation:

```bash
node --version
npm --version
```

#### Windows PowerShell Execution Policy

If you encounter this error in Windows PowerShell:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

Run PowerShell as administrator and use one of these approaches:

1. For current user only (recommended):
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

2. For single command execution:
```powershell
& "C:\Program Files\nodejs\npm.cmd" "--version"
```

3. Alternatively, use Command Prompt (cmd.exe) instead of PowerShell.

### 2. Fix npm Global Installation Permissions

By default, npm's global installation attempts to write to system directories that require root privileges. 
Instead of using `sudo`, set up npm to use a directory in your home folder:

```bash
# Create a directory for global packages
mkdir -p ~/.npm-global

# Configure npm to use the new directory path
npm config set prefix "$HOME/.npm-global" --location=user

# Add the new directory to your PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

# Apply the new PATH setting to your current session
source ~/.bashrc
```

### 3. Clone or Create the Project

If starting from scratch:
```bash
mkdir my-anime-project
cd my-anime-project
npm init -y
```

### 4. Install Dependencies

Install Anime.js:
```bash
npm install animejs
```

For development, you may want to install a local server:
```bash
npm install --save-dev live-server
```

Or you can now safely install it globally with the fixed permissions:
```bash
npm install -g live-server
```

### 5. Create Basic Files

Create an `index.html` file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime.js Demo</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            margin: 50px auto;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    
    <script src="node_modules/animejs/lib/anime.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

Create an `app.js` file:
```javascript
anime({
    targets: '.box',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFC107',
    duration: 2000,
    easing: 'easeInOutQuad'
});
```

### 6. Run the Project

If you installed live-server globally:
```bash
live-server
```

If you installed it locally, add a script to your package.json:
```json
"scripts": {
  "start": "live-server"
}
```

Then run:
```bash
npm start
```

## Understanding the Project Files

- `package.json`: Tracks project dependencies
- `package-lock.json`: Ensures consistent installations across environments
- `index.html`: Contains the HTML structure and styling
- `app.js`: Contains the Anime.js animation code

## Learn More

- [Anime.js Documentation](https://animejs.com/documentation/)
- [npm Documentation](https://docs.npmjs.com/)

## Windows Installation Instructions

### 1. Install Node.js and npm

1. Download the Node.js installer from the [official website](https://nodejs.org/)
2. Run the installer (.msi file) and follow the installation wizard
3. Accept the license agreement, choose the installation location, and click Install
4. After installation, verify Node.js and npm are installed by opening Command Prompt:

```cmd
node --version
npm --version
```

### 2. Clone or Create the Project

If starting from scratch:
```cmd
mkdir my-anime-project
cd my-anime-project
npm init -y
```

### 3. Install Dependencies

Install Anime.js:
```cmd
npm install animejs
```

For development, you may want to install a local server:
```cmd
npm install --save-dev live-server
```

Or you can install it globally:
```cmd
npm install -g live-server
```

### 4. Create Basic Files

Create the same index.html and app.js files as described in the Linux section above.

### 5. Run the Project

If you installed live-server globally:
```cmd
live-server
```

If you installed it locally, add a script to your package.json:
```json
"scripts": {
  "start": "live-server"
}
```

Then run:
```cmd
npm start
```

### 6. Alternative Method: Using Python for a Simple Web Server

If you have Python installed on your Windows machine, you can also run a simple web server:

With Python 3:
```cmd
cd path\to\your\project
python -m http.server 8000
```

Then open your browser and navigate to http://localhost:8000
