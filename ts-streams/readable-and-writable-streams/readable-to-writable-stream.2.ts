import * as fs from 'fs';

const readable = fs.createReadStream('./file1.txt');
const writable = fs.createWriteStream('./file2.txt');

readable.pipe(writable);
