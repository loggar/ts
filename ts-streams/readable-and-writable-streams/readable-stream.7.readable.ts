// We can also call it on a readable stream that is in a paused mode.
// To do so, we first need to wait for the stream to emnit a ‘readable‘ event, indicating that data is available to be read.

import { Readable } from 'stream';

const stream = new Readable();

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('readable', () => {
  let data;
  while (null !== (data = stream.read())) {
    console.log('Received:', data.toString());
  }
});

// The stream emits the ‘readable‘ event when it finishes, just before the ‘end‘ event.
