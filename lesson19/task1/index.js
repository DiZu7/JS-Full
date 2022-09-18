// 1. експорт обʼєктів з відповідними іменами
// 2. присвоїти обʼєкту vehicle метод move, який виводить в консоль текст ʼ${name} is moving'.
// 3. присвоїти обʼєкту vehicle метод stop, який виводить в консоль текст ʼ${name} stopped'.
// 4. Ship присвоїти властивість name
// 5. Обʼєкт ship успадковує всі методи обʼєкта vehicle.
// 6. Ship присвоїти метод startMachine.
// 7. startMachine виводить в консоль текст '${name} lifting anchor up',  викликає метод ship.move();
// 8. Ship присвоїти метод stopMachine
// 9. stopMachine викликає ship.stop(), виводить в консоль текст '${name} lifting anchor down'

export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

// test Data

ship.startMachine();
ship.stopMachine();
