// You can also observe that if you attach a listener after you call the emit function, the EventEmitter does not call it.

import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.emit('event');

eventEmitter.on('event', function() {
  console.log('Event occured!'); // not logged into the console
});

// It is an important thing to keep in mind especially if you are more familiar with promises.
// It is due to the fact that with promises you can add callbacks long after a promise is resolved and it is going to be called immediately.