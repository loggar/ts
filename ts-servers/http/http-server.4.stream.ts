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
        response.setHeader('Content-Type', 'application/json');
        if (request.method === 'GET') {
          response.end(JSON.stringify(posts));
        } else if (request.method === 'POST') {
          getJSONDataFromRequestStream<Post>(request).then(post => {
            posts.push(post);
            response.end(JSON.stringify(post));
          });
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

function getJSONDataFromRequestStream<T>(request: IncomingMessage): Promise<T> {
  return new Promise(resolve => {
    const chunks: any[] = [];
    request.on('data', chunk => {
      chunks.push(chunk);
    });
    request.on('end', () => {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  });
}
