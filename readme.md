# create-rettle
Create Rettle App from the CLI.

## Overview
Create a new Rettke app: 

### npm
```bash
npm create rettle@latest
```

### yarn 
```bash
yarn create rettle@latest
```

## Options
Specifying the directory name at the end of the command creates the directory and builds the application in it.<br/>
The default value is `. /`.

```bash
npm create rettle@latest <directory-name>
```

## Quick Start
```bash
// Create Rettle App
npm create rettle@latest foo

// Move app directory
cd ./foo

// Install packages
npm install

// Start local server
npm run start

// Build site
npm run build
```