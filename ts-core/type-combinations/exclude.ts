/**
 * type Exclude<T, U> = T extends U ? never : T;
 */
type User = {
  _id: number;
  name: string;
  email: string;
  created: number;
};

type UserNoMeta = Exclude<keyof User, "_id" | "created">;
