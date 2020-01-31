function asyncAction1() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async is done!");
      resolve();
    }, 1000);
  });
  return promise;
}

asyncAction1().then(() => console.log("Resolved!"));
