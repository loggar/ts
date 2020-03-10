type FilterField<T extends object, Field extends keyof T> = {
  [K in Exclude<keyof T, Field>]: T[K];
};
// book
type Book = {
  id: number;
  name: string;
  price: number;
};
type BookWithoutPrice = FilterField<Book, "price">; // {id: number, name: string}
