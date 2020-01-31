interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeCode: string;
}

let jane: Person | Employee = {
  name: "Jane",
  age: 20,
  employeeCode: "123"
};

console.log((jane as Person).name);
