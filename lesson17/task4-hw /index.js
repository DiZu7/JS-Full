export const user = {
  firstName: '',
  lastName: '',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    user.firstName = firstName;
    user.lastName = lastName;
  },
};

user.setFullName('John Doe');
console.log(user.getFullName());
