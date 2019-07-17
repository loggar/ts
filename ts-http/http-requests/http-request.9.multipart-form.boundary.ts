// As you can see, it sets the type of content to multipart/form-data and sets a boundary with a random string in it that is different every time.
// It is passed inside of the headers to define a string dividing different parts of the form data.

// To fully understand it, let’s pipe our form into a file and read it.

import * as FormData from 'form-data';
import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('./photo.jpg');
const writeStream = createWriteStream('./file.txt');

const form = new FormData();
form.append('photo', readStream);
form.append('firstName', 'Marcin');
form.append('lastName', 'Wanago');

console.log(form.getHeaders());

form.pipe(writeStream);

/*
{ 
  'content-type': 'multipart/form-data; boundary=--------------------------966991448654339731356450'
}
*/
