import * as fs from 'fs';

const stream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8'
});

stream.on('data', chunk => {
  console.log('New chunk of data:', chunk);
});
