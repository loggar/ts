interface Animal {
  kind: string;
}

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeCode: string;
}

const getIdentifier = (person: Person | Employee | Animal) => {
  if ("name" in person) {
    return person.name;
  } else if ("employeeCode" in person) {
    return person.employeeCode;
  }
  return person.kind;
};

let person3: Person | Employee | Animal = {
  name: "Jane",
  age: 20,
  employeeCode: "123"
};

console.log(getIdentifier(person3));
