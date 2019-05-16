import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

readFile('./file.txt', { encoding: 'utf8' })
  .then(content => {
    console.log(content);
  })
  .catch(error => console.log(error));
