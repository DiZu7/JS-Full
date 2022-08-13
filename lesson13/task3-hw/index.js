/* eslint-disable default-case */

export const reverseArray = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

export const getAdults = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
