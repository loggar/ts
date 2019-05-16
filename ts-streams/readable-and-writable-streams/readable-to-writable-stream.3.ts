// By default, when all data is transmitted, and the readable emits the ‘end‘ event, the writable stream closes with the  writable.end function.

import * as fs from 'fs';

const readable = fs.createReadStream('./file1.txt');
const writable = fs.createWriteStream('./file2.txt');

writable.on('finish', () => {
  console.log('The end!');
});

readable.pipe(writable);

// This behavior can be changed with the  { end: false } option.
// One note here is that if any error occurs during piping, the writable is not closed automatically, so it might be necessary to track it and close it manually.
