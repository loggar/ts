# Issues

## TS2585

```
Build:'Promise' only refers to a type, but is being used as a value here.
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": [
      "es2015.promise" // Or "es2015" or "es6" should work as well
    ]
  }
}
```
