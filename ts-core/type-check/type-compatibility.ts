interface Person {
  name: string;
}

let x2: Person; // Okay, despite not being an implementation of the Person interface
let y2 = { name: "John", age: 20 }; // type { name: string; age: number }
x2 = y2;

// Please note that x2 is still of type Person.
// In the following example, the compiler will show an error message as it does not
// expect the property age in Person but the result will be as expected:
console.log(x2.age); // 20
