import * as fs from 'fs';

fs.writeFile('./_tmp/newFile.txt', null, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('File created successfully');
  }
});
