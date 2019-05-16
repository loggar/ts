import { Readable } from 'stream';

const stream = new Readable();

const read = stream.read.bind(stream);
stream.read = function() {
  console.log('read() called');
  return read();
};

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('data', chunk => {
  console.log(chunk);
});
