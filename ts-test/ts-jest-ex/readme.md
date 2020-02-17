# Jest with typescript

## init

```
npm install --save-dev jest typescript ts-jest @types/jest

npx ts-jest config:init
```

```
npm install node-fetch

npm install express
```

## Ignore css/scss/less imports

By default, jest tries to parse css imports as JavaScript. In order to ignore all things css, some extra configuration is needed.

`./jest/stub-transformer.js`

```js
module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "stub-transformer";
  }
};
```

`jest.config.js`

```js
module.exports = {
  // ...
  transform: {
    "\\.(css|less|scss)$": "./jest/stub-transformer.js"
  }
};
```

## Mocking an express Response object

Refer `Fakexpress.ts`, `Fakexpress.test.ts`
