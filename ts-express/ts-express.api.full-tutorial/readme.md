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
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2017",
    "outDir": "./dist",
    "baseUrl": "./src",
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
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




