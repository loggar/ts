Promise.reject("Rejected")
  .then(value => console.log(value))
  .then(
    value => console.log(value),
    error => console.error(error)
  );
