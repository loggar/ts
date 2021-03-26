type CallbackFunction<T> = (err: Error, data: T) => void;

const api = {
  // `T` is available for use within this function.
  get<T>(uri: string, cb: CallbackFunction<T>) {
    /// ...
  },
};
