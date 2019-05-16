// If you use the arrow functions here, the “this” keyword no longer references to the Node.js EventEmitter instance.

import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event', () => {
  // console.log(this === eventEmitter); // false
});

eventEmitter.emit('event');
