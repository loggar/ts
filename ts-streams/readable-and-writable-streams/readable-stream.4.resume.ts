// All readable streams start in the paused mode by default.
// One of the ways of switching the mode of a stream to flowing is to attach a ‘data‘ event listener.

// A way to switch the readable stream to a flowing mode manually is to call the  stream.resume method.

import * as fs from 'fs';

const stream = fs.createReadStream('./small.txt');

stream.resume();

setTimeout(() => {
  stream.on('data', data => {
    console.log(data);
  });
}, 2000);

// Here we switch the stream into the flowing mode two seconds before we start listening for data.
// If we turn a readable stream into a flowing mode without handlers ready to consume the incoming chunks, the data is lost and so it happens in the example above.
