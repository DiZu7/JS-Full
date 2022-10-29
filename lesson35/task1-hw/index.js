export const parseUser = jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
};

console.log(parseUser('{"name":"macbook"}'));
console.log(parseUser('{"name":"macbook}'));
