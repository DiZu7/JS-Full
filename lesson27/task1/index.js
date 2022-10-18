// витягнути масив ключ-значення
// з масиву зробити обʼєкт з даними ключ-значення
// 1) метод reduce (масив -> обʼєкт)
// 2) розпарсити value (так як записувалися в localstorage через stringify)
// 3) в тілі callback зробити перевірку на вхідні дані (якщо дані в localstorage записалися не через Json.stringify) через try-catch

localStorage.clear();
localStorage.setItem('name', JSON.stringify('Bob'));
localStorage.setItem('hobbies', JSON.stringify({ name: 'John' }));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('lastName', 'Black');
localStorage.setItem('married', true);
localStorage.setItem('job', JSON.stringify(null));

export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
}

console.log(getLocalStorageData());
