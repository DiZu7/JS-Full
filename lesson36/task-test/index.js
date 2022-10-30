// 'use strict';

// /**
//  * @field {string} id
//  * @field {number} price
//  * @field {date} dateCreated
//  * @field {boolean} isConfirmed
//  * @field {date} dateConfirmed
//  * @field {string} city
//  * @field {string} type
//  */
// export class Order {
//   constructor(price, city, type) {
//     this.id = Math.random().toString();
//     this.price = price;
//     this.dateCreated = Date();
//     this.isConfirmed = false;
//     this.dateConfirmed = null;
//     this.city = city;
//     this.type = type;
//   }

//   checkPrice() {
//     return this.price < 1000;
//   }

//   confirmOrder() {
//     if (this.isConfirmed === false) {
//       this.isConfirmed = true;
//       this.dateConfirmed = Date();
//     }
//   }

//   isValideType() {
//     return this.type === 'Buy' || this.type === 'Sell';
//   }
// }
// // console.log(price);
// // console.log(id);
// // console.log(type);
// // console.log(dateCreated);

// const order1 = new Order(100, 'Lviv', 'Buy');
// console.log(order1.checkPrice());


const splitString = (text, len = 10) => {
  if (typeof text !== 'string') return null;
  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) break;
    if (chunk.length < len) {
      strArr.push(chunk.padEnd(len, '.'));
    } else {
      strArr.push(chunk);
    }

    startPosition += len;
  }

  return strArr;
};

console.log(splitString('abcd efgh', 4));
console.log(splitString(6986, 4));
console.log(splitString('abcdefgkjgkjb'));
console.log(splitString('abcdefghugoihdgsehjk', 6));
