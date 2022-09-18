/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
  }

  get users() {
    return Object.freeze(this._users);
  }

  getUserNames() {
    return this.users.map(user => user.name);
  }

  getUserIds() {
    return this.users.map(user => user.id);
  }

  getUserNameById(personalId) {
    return this.users.find(user => (user.id === personalId)).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'
console.log(user);

// user.name = 'Bob';
// console.log(user.name);

const people = [
  new User('1', 'Tom', 'session-id1'),
  new User('2', 'Bob', 'session-id2'),
  new User('3', 'Sam', 'session-id3'),
];

const userRepository = new UserRepository(people);

console.log(userRepository.users);
console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById('1'));

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
