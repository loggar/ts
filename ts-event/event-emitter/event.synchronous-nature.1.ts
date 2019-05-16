// Node.js EventEmmiter calls all listeners synchronously. We can observe it by calling them into one another:

import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event1', () => {
  console.log('First event here!');
  eventEmitter.emit('event2');
});

eventEmitter.on('event2', () => {
  console.log('Second event here!');
  eventEmitter.emit('event3');
});

eventEmitter.on('event3', () => {
  console.log('Third event here!');
  eventEmitter.emit('event1');
});

eventEmitter.emit('event1');
