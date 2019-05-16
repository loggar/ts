// The  _write method can also be declared by passing it to the  Writable constructor, or used by extending the Writable class.

// Having all this knowledge, let’s implement a simplified version of a stream that writes data to a file.

import * as fs from 'fs';
import * as util from 'util';
import { Writable } from 'stream';

const writeFile = util.promisify(fs.writeFile);

class WritableFileStream extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(chunk: any, encoding: string, next: (error?: Error) => void) {
    writeFile(this.path, chunk)
      .then(() => next())
      .catch(error => next(error));
  }
}

const readable = fs.createReadStream('./file1.txt');
const writable = new WritableFileStream('./file2.txt');

readable.pipe(writable);

// In the above example, every time we write to our WritableFileStream, we add the data at the end of a file.
