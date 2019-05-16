import * as fs from 'fs';

const stream = fs.createWriteStream('./file.txt');

stream.write('Hello world!', () => {
  console.log('File created!');
});
