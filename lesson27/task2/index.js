// зробити розмітку в html і css
// повісити listener на контейнер з кнопками (делегування)
// написати функцію для listener, яка буде змінювати значення лічильника
// 1) перевірити чи при кліці потрапили на кнопку (витягнути через e.target.classList.contains(.), зробити перевірку)
// 2) генерувати нове значення через перевірку дата-атрибуту (dataset) додавати або мінусувати значення лічильника і записувати в DOM element значення
// синхронізувати вкладки між собою через localstorage
// 1) newValue записувати в localstorage через setItem
// навісити на window подію storage
// написати функцію для listener: текстове значення лічильника = e.newValue
// прописати DOMcontentloaded для ініціалізації сторінки

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (isButton) {
    const action = e.target.dataset.action;

    const oldValue = Number(counterValueElem.textContent);
    const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;
  }
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
