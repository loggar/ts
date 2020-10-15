class Person {
  private first_name: string;
  private last_name: string;
  private age: number;
  private is_married: boolean;

  constructor(fname: string, lname: string, age: number, married: boolean) {
    this.first_name = fname;
    this.last_name = lname;
    this.age = age;
    this.is_married = married;
  }
}
