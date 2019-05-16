// npm install @types/form-data form-data

import * as FormData from 'form-data';
import { request } from 'http';
import { createReadStream } from 'fs';

const readStream = createReadStream('./photo.jpg');

const form = new FormData();
form.append('photo', readStream);
form.append('firstName', 'Marcin');
form.append('lastName', 'Wanago');

const req = request(
  {
    host: 'localhost',
    port: '5000',
    path: '/upload',
    method: 'POST',
    headers: form.getHeaders()
  },
  response => {
    console.log(response.statusCode); // 200
  }
);

form.pipe(req);
