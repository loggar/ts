import { request } from 'http';

const req = request(
  {
    host: 'your.ex.com',
    path: '/todos/1',
    method: 'GET'
  },
  response => {
    const chunks: any[] = [];
    response.on('data', chunk => {
      chunks.push(chunk);
    });
    response.on('end', () => {
      const result = Buffer.concat(chunks).toString();
      console.log(result);
    });
  }
);

req.end();
