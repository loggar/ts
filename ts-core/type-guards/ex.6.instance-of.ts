interface Animal {
  kind: string;
}

class Dog implements Animal {
  breed: string;
  kind: string;
  constructor(kind: string, breed: string) {
    this.kind = kind;
    this.breed = breed;
  }
}

class Cat implements Animal {
  age: number;
  kind: string;
  constructor(kind: string, age: number) {
    this.kind = kind;
    this.age = age;
  }
}

const getRandomAnimal = () => {
  return Math.random() < 0.5 ? new Cat("cat", 2) : new Dog("dog", "Laborador");
};

let animal = getRandomAnimal();

if (animal instanceof Cat) {
  console.log(animal.age);
}

if (animal instanceof Dog) {
  console.log(animal.breed);
}
