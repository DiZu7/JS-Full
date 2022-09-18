// експортувати конструктор User
// вказати аргументи для constructor
// додати метод sayHi
// додати метод requestNewPhoto
// додати метод setAge
// додати static метод createEmpty

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }

    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }

    return newAge;
  }

  static createEmpty() {
    const newUser = new User('', null);
    return newUser;
  }
}

// test data

const user1 = new User('Tom', 17);
user1.sayHi();
user1.setAge(26);
user1.setAge(21);
console.log(user1);
console.log(user1.createEmpty);
console.log(User.createEmpty);
