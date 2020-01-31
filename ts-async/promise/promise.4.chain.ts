Promise.resolve("Completed")
  .then(
    value => {
      return "Completed Two";
    },
    error => console.error(error)
  )
  .then(
    value => console.log(value),
    error => console.error(error)
  );
