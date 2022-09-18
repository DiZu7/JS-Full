// input: object
// output: array

// експорт функції getOwnProps
// створити пустий масив
// проітерувати обʼєкт
// вказати умови про власні властивості
// методи обʼєкта не мають входити в масив
// пушити властивість в масив на кожному кроці ітерації
// повернути масив

export function getOwnProps(obj) {
  return Object.keys(obj).filter(
    (elem) =>
      typeof Object.getOwnPropertyDescriptor(obj, elem).value !== 'function'
  );
}

//test Data
export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
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

console.log(getOwnProps(ship));
