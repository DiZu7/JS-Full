const btnElems = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

[...btnElems].map(btnElem => btnElem.addEventListener('click', handleClick));
