// Using type annotation to be explicit for the purposes of the
// tutorial.
const userCollection: ICollection<User> = new InMemoryCollection<User>();

function manageUsers(userCollection: ICollection<User>) {
  userCollection.add(new User());
}
