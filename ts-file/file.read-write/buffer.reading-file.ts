import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

readFile('./file.txt')
  .then(content => {
    console.log(content instanceof Buffer); // true
    console.log(content.toString());
  })
  .catch(error => console.log(error));
