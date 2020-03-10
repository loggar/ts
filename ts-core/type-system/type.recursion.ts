type HasValuesOfType<T extends object, F> = {
  [K in keyof T]: T[K] extends F
    ? true
    : T[K] extends object
    ? HasValuesOfType<T[K], F>
    : false;
}[keyof T] extends false
  ? false
  : true;
