type CallbackFunction<T> = (err: Error, data: T) => void;

const usersApi = {
  get(uri: string, cb: CallbackFunction<User>) {
    /// ...
  },
};
