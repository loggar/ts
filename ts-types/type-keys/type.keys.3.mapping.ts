type User = {
  name: string;
  lastname: string;
};
type MapUsers<T extends Array<User>> = {
  [K in keyof T]: T[K] extends User ? { name: T[K]["name"] } : never;
};
type X = [
  {
    name: "John";
    lastname: "Doe";
  },
  {
    name: "Tom";
    lastname: "Hanks";
  }
];

type Result = MapUsers<X>; // [{name: 'John'}, {name: 'Tom'}]
