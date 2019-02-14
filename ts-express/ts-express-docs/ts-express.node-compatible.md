# node-compatibility issues

## `node_modules/@types/express/index"' has no default export.`

solve

```json
// tsconfig.json

{
  "compilerOptions": {
    "esModuleInterop": true
  },
}
```
