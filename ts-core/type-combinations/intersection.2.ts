type Person2 = { name: string; age: number };
type Worker2 = { companyId: string };

type Employee = Person2 & Worker2;

const bestOfTheMonth: Employee = {
  name: "Peter",
  age: 39,
  companyId: "123456"
};

console.log(bestOfTheMonth);
