// When sending multipart/form-data we need to use appropriate headers. Let’s look into what the form-data library generates for us:

import * as FormData from 'form-data';
import { createReadStream } from 'fs';

const readStream = createReadStream('./photo.jpg');

const form = new FormData();
form.append('photo', readStream);
form.append('firstName', 'Marcin');
form.append('lastName', 'Wanago');

console.log(form.getHeaders());

/*
{
  'content-type': 'multipart/form-data; boundary=--------------------------898552055688392969814829'
}
*/
