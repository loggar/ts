// You can change this behavior a bit by using, for example, the setTimeout function.
// When the Node.js interprets the setTimeout function, it sets off a timer. When it goes off, it throws the callback to the end of the event loop.
// Due to that, one function is not called inside of the other one and the call stack is not exceeded.

import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event1', () => {
  setTimeout(() => {
    console.log('First event here!');
    eventEmitter.emit('event2');
  });
});

eventEmitter.on('event2', () => {
  setTimeout(() => {
    console.log('Second event here!');
    eventEmitter.emit('event3');
  });
});

eventEmitter.on('event3', () => {
  setTimeout(() => {
    console.log('Third event here!');
    eventEmitter.emit('event1');
  });
});

eventEmitter.emit('event1');
