class Dog {
  name: string;
  constructor(data: string) {
    this.name = data;
  }
}
let dog: Dog = new dog("Rover");
if (dog instanceof Dog) {
  console.log(`${dog.name} is a dog`);
}
