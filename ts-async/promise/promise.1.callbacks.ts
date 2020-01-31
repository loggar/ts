function asyncMethod(cb: Function) {
  setTimeout(() => {
    console.log("Async Callback");
    cb();
  }, 1000);
}

asyncMethod(() => console.log("Async Callback Completed"));
