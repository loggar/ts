// If we wanted to take this a little further, we could modify the generic type parameters on CallbackFunction to accept a custom error type as well:
// type CallbackFunction<TData, TError> = (err: TError, data: TData) => void;

// And, just like you can make function arguments optional, you can with type parameters too. In the event that the user does not provide an error type, we’ll set it to the error constructor by default:
type CallbackFunction<TData, TError = Error> = (
  err: TError,
  data: TData
) => void;

// With this, we can now specify a callback function type in multiple ways:
const apiOne = {
  // `Error` is used by default for `CallbackFunction`.
  get<TResponse>(uri: string, cb: CallbackFunction<TResponse>) {
    // ...
  },
};

apiOne.get<string>("uri", (err: Error, data: string) => {
  // ...
});

const apiTwo = {
  // Override the default and use `HttpError` instead.
  get<TResponse>(uri: string, cb: CallbackFunction<TResponse, HttpError>) {
    // ...
  },
};

apiTwo.get<string>("uri", (err: HttpError, data: string) => {
  // ...
});
