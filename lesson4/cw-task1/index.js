// const cleanTransactionsList = (arr) => {
//   const dollarUS = Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });

//   return arr.map((elem) => {
//     return dollarUS.format(String(elem).replace(/[^\d.-]/g, ''));
//   });
// };

// const transactions = ['   1.9  ', '16.4', 17, '  1 dollar '];

// console.log(cleanTransactionsList(transactions));

const cleanTransactionsList = (arr) => {
  const asDollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return arr
    .filter((elem) => !isNaN(elem))
    .map((elem) => {
      return asDollar.format(String(elem).trim());
    });
};
const transactions = ['   1.9  ', '16.4', 17, '  1 dollar '];

console.log(cleanTransactionsList(transactions));
