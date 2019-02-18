# ts eslint and prettier

In the [TypeScript 2019 Roadmap](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration), the TypeScript core team explains that ESLint has a more performant architecture than TSLint and that they will only be focusing on ESLint when providing editor linting integration for TypeScript.

## typescript

```
npm install -D typescript ts-node
```

## eslint

```
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- `eslint`: The core ESLint linting library
- `@typescript-eslint/parser`: The parser that will allow ESLint to lint TypeScript code
- `@typescript-eslint/eslint-plugin`: A plugin that contains a bunch of ESLint rules that are TypeScript specific

```js
// .eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
```

> Note: I prefer using a JavaScript file for the .eslintrc file (instead of a JSON file) as it supports comments that can be used to better describe rules.

Example for react project:

```js
// .eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
```

## prettier

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

```js
// .prettierrc.js

module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
};
```

```js
// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
};
```

The advantage of having prettier setup as an ESLint rule using `eslint-plugin-prettier` is that code can automatically be fixed using ESLint's `--fix` option.

## script

```json
// package.json

"scripts": {
      "lint": "eslint --fix -f visualstudio \"src/**\"",
      "lint-out-html": "eslint --fix -o ./out/lint/eslint.html -f html \"src/**\""
  },
```

```
npm run lint
```
