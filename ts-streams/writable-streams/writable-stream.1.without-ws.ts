import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);

writeFile('./file.txt', 'Hello world!', { encoding: 'utf8' })
  .then(() => {
    console.log('File created!');
  })
  .catch(error => console.log(error));
