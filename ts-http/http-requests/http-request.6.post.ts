import { request } from 'http';

const req = request(
  {
    host: 'localhost',
    port: '5000',
    path: '/posts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  response => {
    console.log(response.statusCode); // 200
  }
);

req.write(
  JSON.stringify({
    author: 'Marcin',
    title: 'Lorem ipsum',
    content: 'Dolor sit amet'
  })
);

req.end();
