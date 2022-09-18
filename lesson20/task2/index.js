// прописати аргументи name, numberOfWheels в конструктор класа Vehicle, який зберігатиме ці властивості
// додати метод move в клас Vehicle
// додати метод stop в клас Vehicle
// Клас Ship наслідується від Vehicle
// прописати аргументи name, numberOfWheels, maxSpeed в конструктор класа Ship, який зберігатиме ці властивості
// додати метод move в клас Ship
// додати метод stop в клас Ship

export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

// test data
const ship1 = new Ship('Avrora', false, 60);
ship1.move();
ship1.stop();
console.log(ship1);

