# RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

## Setting Up

```
npm install -save ts-node
```

```
npm install --save @types/express express body-parser mongoose
```

```
npm install --save-dev typescript nodemon
```

typescript configure.

``` json
// tsconfig.json
{
    "compilerOptions": {
        "module": "commonjs",
        "moduleResolution": "node",
        "pretty": true,
        "sourceMap": true,
        "target": "es6",
        "outDir": "./dist",
        "baseUrl": "./lib"
    },
    "include": [
        "lib/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

npm script

``` json
"scripts": {
    "build": "tsc",
    "dev": "ts-node ./lib/server.ts",
    "start": "nodemon ./dist/server.js",
    "prod": "npm run build && npm run start"
}
```


## secure API

### 1. always use HTTPS over HTTP

```
openssl req -newkey rsa:2048 -nodes -keyout keytemp.pem -x509 -days 365 -out cert.pem
openssl rsa -in keytemp.pem -out key.pem
```

``` ts
// server.ts
const httpsOptions = {
	key: fs.readFileSync('./ssl/key.pem'),
	cert: fs.readFileSync('./ssl/cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
})
```

### 2. Using secret key for authentication

``` sh
node -e "console.log(require('crypto').randomBytes(20).toString('hex'))"

dfd13596b0ecfeb0e355c99a3e095604159ae50e
```

routers:

``` ts
// crmRouters.ts
app.route('/contact')
    .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
        res.status(401).send('You shall not pass!');
    } else {
        next();
    }
}, this.contactController.getContacts)
```

client:

```
// GET request
https://127.0.0.1:3000?key=78942ef2c1c98bf10fca09c808d718fa3734703e
```

### 3. Secure MongoDB

``` mongo
use CRMdb

db.createUser(
	{
		user: 'username',
		pwd: '123123'
		roles: [{
			role: 'readWrite',
			db: 'CRMdb'
		}]
	}
)
```

After that, we will stop and restart MongoDB with authentication. Remember to check your dbpath.

``` sh
# Stop MongoDB (Windows)
net stop MongoDB

# Start mongodb with authentication
mongod --auth --port 27017 --dbpath C:\your-data\path
```

Now, if we login to the mongo shell, there is no warning about access control.

Or you can connect to the mongo shell with username and password you just created.

``` sh
mongo --port 27017 -u username -p 123123  --authenticationDatabase CRMdb
```

Now, if we try to access the database even with the key, we are not able to.

That’s why we need to edit the mongodb URL in order for the app to work. Again, you should put the mongodb URI to the environment.

``` ts
// app.ts

public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';
```
