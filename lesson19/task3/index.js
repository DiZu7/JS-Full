//input: string, number
//output: object

// User приймає name і age і зберігає їх
// Прототип має метод sayHi
// sayHi() виводить в консоль текст з name
// Прототип має метод requestNewPhoto
// requestNewPhoto() виводить в консоль текст з name
// Прототип має метод setAge
// setAge() встановлює нове значення властивості age і виводить в консоль текст з name, якщо new age >= 25
// setAge() повертає false + break, якщо new age < 0
// setAge() повертає передане значення, якщо воно > 0

export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (this.age < 0) {
    return false;
  }
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};

//test data
const user1 = new User('Tom', 26);
console.log(user1);

user1.setAge(27);
