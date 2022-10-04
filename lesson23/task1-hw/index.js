const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, idNumber) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      checkbox.dataset.id = idNumber;

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtnElem = document.querySelector('.create-task-btn');

const createNewTask = event => {
  event.preventDefault();
  const taskInputElem = document.querySelector('.task-input');
  // if (taskInputElem.value === '') {
  //   return;
  // }
  tasks.push({ text: taskInputElem.value, done: false });
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  renderTasks(tasks);
  taskInputElem.value = '';
};

createBtnElem.addEventListener('click', createNewTask);

const checkboxElem = document.querySelector('.list__item-checkbox');

const ifChecked = () => {

};

checkboxElem.addEventListener('click', ifChecked);
