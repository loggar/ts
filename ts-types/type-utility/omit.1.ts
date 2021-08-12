// The combination of Pick and Exclude utility types enables the omission type to be written as follows:
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// First off, Exclude by definition means exclude from T those types that are assignable to U.
type Exclude<T, U> = T extends U ? never : T;

// type A = Exclude<'id' | 'name', 'id'>
/**
 * type A = 'name'
 * 'name' is not assignable to 'id', hence it is excluded
 **/

// Next, moving on to Pick. By definition, this means from T, pick a set of properties whose keys are in the union K.
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// type Person = { id: string; name: string }
// type C = Pick<Person , 'name'>;
/**
 * keyof Person are 'id' and 'name'
 * Pick<Person , 'name'> = { [P in K]: T[P] }
 *                       = { name: Person['name']}
 *                       = { name: string }
 * Hence, type C = { name: string }
 */

// Finally, going back to Omit. Omit is derived from using Pick and Exclude.
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// It is implemented by first finding the types that we want to keep using Exclude , Exclude<keyof T, K>. Then, Pick those types that we want to keep.
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Person = { id: string; name: string };

type D = Omit<Person, "id">;
/**
 * keyof Person are 'id' and 'name'
 * Exclude<keyof T, K> = Exclude<'id' | 'name', 'id'> = 'name'
 * type D = Omit<Person , 'id'>;
          = Pick<Person, Exclude<keyof Person, 'id'>> 
          = Pick<Person, 'name'> 
          = { name: string }
 * Hence, type D = { name: string }
 */
