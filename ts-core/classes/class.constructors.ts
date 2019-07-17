class Student {
  firstName: String;
  lastName: String;
  studentId: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = 0;
  }

  getGrades(): number {
    return 4;
  }
}

let student = new Student("FirstName", "LastName"); // an instance of Student class

console.log(student.getGrades());
