type InterA = { id: number };
type InterB = { name: string };
type InterC = { email: string };

type User = InterA & InterB & InterC;

const addUser = (users: Array<User>, user: User): Array<User> => [
  ...users,
  user
];

// addUser([], { id: 1, name: 'user a' }); // Error!
addUser([], { id: 1, name: 'user b', email: 'some.email@some.email' });
