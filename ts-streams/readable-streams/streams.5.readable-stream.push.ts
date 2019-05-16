import { Readable } from 'stream';

const stream = new Readable();

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('data', chunk => {
  console.log(chunk.toString());
});
