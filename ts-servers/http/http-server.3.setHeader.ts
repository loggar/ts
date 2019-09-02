import { createServer, IncomingMessage, ServerResponse } from 'http';

interface Post {
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    title: 'Lorem ipsum',
    content: 'Dolor sit amet'
  }
];

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    switch (request.url) {
      case '/posts': {
        if (request.method === 'GET') {
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify(posts));
        }
        break;
      }
      default: {
        response.statusCode = 404;
        response.end();
      }
    }
  }
);
