import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    switch (request.url) {
      case '/upload': {
        if (request.method === 'POST') {
          const chunks: any[] = [];
          request.on('data', chunk => {
            chunks.push(chunk);
          });
          request.on('end', () => {
            const result = Buffer.concat(chunks).toString();
            response.end(result);
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
