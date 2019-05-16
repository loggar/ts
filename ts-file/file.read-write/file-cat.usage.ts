import cat from './file-cat';

const command = 'cat';
const path = './_tmp/newFile.txt';

if (command && path) {
  switch (command) {
    case 'cat': {
      cat(path);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
} else {
  console.log('Command missing');
}
