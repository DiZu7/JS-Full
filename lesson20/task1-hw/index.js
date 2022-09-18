'use strict';
// прописати аргументи для конструктора (ID рандомний???)
// створити метод checkPrice()
//
// створит метод cofirmOrder()
//
// створити метод isValidType
//
//
//
//
//
//

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
    this.id = Math.random().toString();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

// test data
const order1 = new Order(9000, 'Kyiv', 'Sell');
console.log(order1);
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1);
console.log(order1.isValidType());

const order2 = new Order(100, 'Kyiv', 'Out of Stock');
console.log(order2);
console.log(order2.checkPrice());
console.log(order2.isValidType());
