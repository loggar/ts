class Student {
  firstName: String;
  lastName: String;
  studentId: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = 0;
  }

  getGrades() {
    // some code
  }
}

let student = new Student("FirstName", "LastName"); // an instance of Student class
