interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 28
};

const checkForName = "name" in person; // true
