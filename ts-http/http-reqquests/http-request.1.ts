import { request } from 'http';

const req = request(
  {
    host: 'your.ex.com',
    path: '/todos/1',
    method: 'GET'
  },
  response => {
    console.log(response.statusCode); // 200
  }
);

req.end();
