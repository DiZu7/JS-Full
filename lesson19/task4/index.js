// експортувати обʼкт за замовчуванням
// додати в обʼєкт властивості firstName, lastName
// додати getter, повертає  firstName + lastName
// додати setter, приймає fullName, зберегти значення у відповідні властивості обʼєкта

const user = {
  firstName: null,
  lastName: null,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;
// test data
user.fullName = 'Tom Hardy';
console.log(user.fullName);
