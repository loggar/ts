# ts express api (full tutorial)

## express

```
npm install express
```

```js
// src/index.js

const express = require('express');
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
```

```json
// package.json

  "main": "src/index.js",
  "scripts": {
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run start
```

Web browser http://localhost:8080/

## typescript

```
npm install --save-dev typescript
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src/**/*"]
}

```

```ts
// src/index.ts

import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
```

## tslint

```
npm install --save-dev tslint
```

```json
// tslint.json

{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "trailing-comma": [false]
  },
  "rulesDirectory": []
}
```

```json
// package.json

  "main": "dist/index.js",
  "scripts": {
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run build
```

## Getting the right types

To assist TypeScript developers, library authors and community contributors publish companion libraries called [TypeScript declaration files](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html). Declaration files are published to the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) open source repository, or sometimes found in the original JavaScript library itself.

Update your project so that TypeScript can use the type declarations for Node.js and Express.

```
npm install --save-dev @types/node @types/express
```

Next, rerun the start script and verify there are no more errors.

```
npm start
```

## Materialize and EJS

```
npm install ejs
```

```html
// src/views/index.ejs

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Guitar Inventory</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
  <body>
    <div class="container">
      <h1 class="header">Guitar Inventory</h1>
      <a class="btn" href="/guitars"
        ><i class="material-icons right">arrow_forward</i>Get started!</a
      >
    </div>
  </body>
</html>
```

```ts
// src/index.ts

import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
```

## Add an asset build script for Typescript

The TypeScript compiler does the work of generating the JavaScript files and copies them to the dist folder. However, it does not copy the other types of files the project needs to run, such as the EJS view templates. To accomplish this, create a build script that copies all the other files to the dist folder.

```
npm install --save-dev ts-node shelljs fs-extra nodemon rimraf npm-run-all
npm install --save-dev @types/fs-extra @types/shelljs
```

| Module      | Description                                                                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ts-node     | Use to run TypeScript files directly.                                                                                                                                                                                   |
| shelljs     | Use to execute shell commands such as to copy files and remove directories.                                                                                                                                             |
| fs-extra    | A module that extends the Node.js file system (fs) module with features such as reading and writing JSON files.                                                                                                         |
| rimraf      | Use to recursively remove folders.                                                                                                                                                                                      |
| npm-run-all | Use to execute multiple npm scripts sequentially or in parallel.                                                                                                                                                        |
| nodemon     | A handy tool for running Node.js in a development environment. Nodemon watches files for changes and automatically restarts the Node.js application when changes are detected. No more stopping and restarting Node.js! |

```ts
// tools/copyAssets.ts

import * as shell from 'shelljs';

// Copy all the view templates
shell.cp('-R', 'src/views', 'dist/');
```

```json
// package.json

  "scripts": {
    "clean": "rimraf dist/*",
    "copy-assets": "ts-node tools/copyAssets",
    "lint": "tslint -c tslint.json -p tsconfig.json --fix",
    "tsc": "tsc",
    "build": "npm-run-all clean lint tsc copy-assets",
    "dev:start": "npm-run-all build start",
    "dev": "nodemon --watch src -e ts,ejs --exec npm run dev:start",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run dev
```

## Manage process environment configuraton.

Example: Using [dotenv](https://www.npmjs.com/package/dotenv)

```
npm install dotenv
npm install --save-dev @types/dotenv
```

```conf
// .env

# Set to production when deploying to production
NODE_ENV=development

# Node.js server configuration
SERVER_PORT=8080
```

```ts
// src/index.ts

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res) => {
  // render the index template
  res.render('index');
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
```

