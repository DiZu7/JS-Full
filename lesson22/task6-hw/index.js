const btnElems = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

[...btnElems].map(btnElem => btnElem.addEventListener('click', handleClick));
