import touch from './file-touch';

const command = 'touch';
const path = './_tmp/newFile.txt';

if (command && path) {
  switch (command) {
    case 'touch': {
      touch(path);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
} else {
  console.log('Command missing');
}
