import { createServer, IncomingMessage, ServerResponse } from 'http';

const posts = [
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
