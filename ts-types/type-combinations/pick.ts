/**
 * type Pick<T, K extends keyof T> = {
 *   [P in K]: T[P];
 *  };
 */
type UserNoMeta2 = Pick<User, "name" | "email">;
