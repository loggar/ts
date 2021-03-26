type CallbackFunction<TData> = (err: Error, data: TData) => void;

const api = {
  get<TResponse>(uri: string, cb: CallbackFunction<TResponse>) {
    // ...
  },
};
