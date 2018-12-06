# typescript express tutorial

ref ) https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

Title : TypeScript Express tutorial #1 Middleware, routing, and controllers

## init

```
npm init -y

npm install typescript express @types/express ts-node
```

``` json
// tsconfig.js

{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es2017",
    "outDir": "./dist",
    "baseUrl": "./src"
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

``` json
// package.json

"scripts": {
  "dev": "ts-node ./src/server.ts"
}
```

``` ts
// src/server.ts

import * as express from 'express';
 
const app = express();
 
app.get('/', (request, response) => {
  response.send('Hello world!');
});
 
app.listen(5000);
```

try out:

```
npm run dev
```

## middleware

middleware example:

``` ts
import * as express from 'express';
 
function loggerMiddleware(request: express.Request, response: express.Response, next) {
  console.log(`${request.method} ${request.path}`);
  next();
}
 
const app = express();
 
app.use(loggerMiddleware);
 
app.get('/hello', (request, response) => {
  response.send('Hello world!');
});
 
app.listen(5000);
```

`body-parser`

```
npm install body-parser
```

``` ts
// src/server.tx

import * as express from 'express';
import * as bodyParser from 'body-parser';
 
const app = express();
 
app.use(bodyParser.json());
 
app.post('/', (request, response) => {
  response.send(request.body);
});
 
app.listen(5000);
```

## Routing

Routing ex:

``` ts
const router = express.Router();
 
router.get('/', (request, response) => {
  response.send('Hello world!');
});

app.use('/', router);
```

Routing ex with base url:

``` ts
router.get('/hello', (request, response) => {
  response.send('Hello world!');
});
 
app.use('/api', router);
```

## Request, Response

The request object contains information about the HTTP request, such as headers, the request query string, and parameters.
It inherits from `http.IncomingMessage.prototype` and therefore contains its fields and methods, aside from adding new ones.

The response object represents the HTTP response that the application sends when receiving an HTTP request.
It inherits from `http.ServerResponse.prototype`
Its the most important method is called send. It sends the HTTP response so that the client can receive it. The function accepts different types of data: strings, objects (Array included), or Buffers. Send ends the response process with data, but you can also end it without any data using the end function.
The same as with the request, we dive more into the response object as we go.

``` ts
app.get('/', (request, response) => {
	response.send({
		IncomingMessageIsPrototypeOfRequest: http.IncomingMessage.prototype.isPrototypeOf(request),  // true
		ServerResponseIsPrototypeOfResponse: http.ServerResponse.prototype.isPrototypeOf(response),  // true
		hostname: request.hostname,
		path: request.path,
		method: request.method,
	});
});
```

## Controllers

``` ts
// src/posts/posts.interface.ts

interface Post {
  author: string;
  content: string;
  title: string;
}
 
export default Post;
```

``` ts
// src/posts/posts.controller.ts

import * as express from 'express';
import Post from './posts.interface';
 
class PostsController {
  public path = '/posts';
  public router = express.Router();
 
  private posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  }
}
 
export default PostsController;
```

``` ts
// src/app.ts

import * as express from 'express';
import * as bodyParser from 'body-parser';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers, port) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;
```

``` ts
// src/server.ts

import App from './app';
import PostsController from './posts/posts.controller';
 
const app = new App(
  [
    new PostsController(),
  ],
  5000,
);
 
app.listen();
```

The code above results in creating the route named `/posts` that responds on the GET and POST request, storing and displaying the list of posts. In the upcoming parts of the Typescript Express course, we continue to use controllers to structure our code.

The getAllPosts and createAPost are arrow functions because they access properties of an instance of the class. Since they are passed to the router and not called directly, the context changes.
You can achieve the same result by calling  `this.router.get(this.path, this.getAllPosts.bind(this))`
