// The error is thrown because the actual execution of the above listeners looks like this:
// DO NOT do this.

function event1() {
  console.log('First event here!');
  event2();
}

function event2() {
  console.log('Second event here!');
  event3();
}

function event3() {
  console.log('Third event here!');
  event1();
}

event1();
