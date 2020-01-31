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

const isPerson = (person: Person | Employee | Animal): person is Person => {
  return (person as Person).name !== undefined;
};

const isEmployee = (person: Person | Employee | Animal): person is Employee => {
  return (person as Employee).employeeCode !== undefined;
};

let person2: Person | Employee | Animal = {
  name: "Jane",
  age: 20,
  employeeCode: "123"
};

if (isPerson(person2)) {
  console.log(person2.name);
} else if (isEmployee(person2)) {
  console.log(person2.employeeCode);
} else {
  console.log(person2.kind);
}
