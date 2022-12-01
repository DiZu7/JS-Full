'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

// algo
// write callback:
//   - input: obj, string
//   - output: undefined
// create object with 2 elem(userId: value from userId, email: userId value + '@example.com' )
// call callback with rendom delay:
//   - if userId === broken args = (null, 'Failed to load user data' )
//   - else arg = object
// write function for random generating delay
// use random generating function to generate delay for callback

const generateRandomDelay = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export const requestUserData = (userId, callback) => {
  const delay = generateRandomDelay(1, 3) * 1000;
  const user = {
    userId,
    email: `${userId}@example.com`,
  };

  setTimeout(
    () => (userId === 'broken' ? callback(null, 'Failed to load user data') : callback(user)),
    delay,
  );
};

// test data
const showRes = (obj, textError) => {
  console.log(obj === null ? textError : obj);
};

requestUserData('userId777', showRes);
requestUserData('broken', showRes);
