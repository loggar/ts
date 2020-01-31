function asyncAction2() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async is done!");
      reject("Rejected!");
    }, 1000);
  });
  return promise;
}

asyncAction2()
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
    // error handler is called
    console.log(error);
  });
