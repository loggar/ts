# Path aliases with TypeScript in Node.js

In Node.js (or TS/JS in general) you can import single modules into your code.
This might look the following:

```ts
import { User } from '../../user/model';
import { Article } from '../../article/model';

import { Cache } from '../../../../cache';
import { MongoDB } from '../../../../mongodb';
```

Using path aliases:

```ts
import { User } from '@modules/user/model';
import { Article } from '@modules/article/model';

import { Cache } from '@services/cache';
import { MongoDB } from '@services/mongodb';
```

- `@modules` that maps to `./src/rest/modules`
- `@services` that maps to `./src/services`

## Step 1: Update tsconfig.json

```json
// tsconfig.json

"baseUrl": "./src",
"paths": {
    "@modules/*": ["rest/modules/*"],
    "@services/*": ["services/*"]
}
```

Now, you can use the new path aliases for module imports in your application. There occur any errors in your IDE (in my case VSC) or when you compile the code.

However, we are not done yet. When you try compile the TS code into JS you won't see any errors. But as soon as you run your compiled JS code you will get an error:

```
Error: Cannot find module '@modules/user'
```

That's because JS can't resolve the modules for the declared path aliases.

## Step 2: Install module-alias package

```
npm i --save module-alias
```

```json
// package.json

"_moduleAliases": {
  "@modules": "dist/rest/modules",
  "@services": "dist/services"
}
```

Last but not least we have to register the path aliases in our application.
Add the following line at the top of your startup file:

```js
import 'module-alias/register';
```

Finally, when you compile and execute the code you shouldn't see any import errors.
