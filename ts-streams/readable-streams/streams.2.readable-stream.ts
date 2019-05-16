import * as fs from 'fs';

const stream = fs.createReadStream('./file.txt');

stream.on('data', chunk => {
  console.log('New chunk of data:', chunk);
});
