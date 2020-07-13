interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeCode: string;
}

interface Animal {
  kind: string;
}

const isPerson = (person: Person | Employee | Animal): person is Person => {
  return (person as Person).name !== undefined;
};

let person1: Person | Employee | Animal = {
  name: "Jane",
  age: 20,
  employeeCode: "123"
};

if (isPerson(person1)) {
  console.log(person1.name);
} else {
  // console.log(person1.employeeCode);
  // Property 'employeeCode' does not exist on type 'Animal | Employee'.Property 'employeeCode' does not exist on type 'Animal'.(2339)
}
