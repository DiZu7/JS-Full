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

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createNewTask = event => {
  event.preventDefault();
  const taskInputElem = document.querySelector('.task-input');
  if (taskInputElem.value === '') {
    return;
  }
  tasks.push({ text: taskInputElem.value, done: false });

  taskInputElem.value = '';

  renderTasks(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');

createBtnElem.addEventListener('click', createNewTask);

const onSwitch = event => {
  const checkboxId = Number(event.target.dataset.id);

  const chosedTask = tasks[checkboxId];
  chosedTask.done = !chosedTask.done;

  renderTasks(tasks);
};

listElem.addEventListener('click', onSwitch);




// const listElem = document.querySelector('.list');

// const tasks = [
//   { text: 'Buy milk', done: false, id: '1' },
//   { text: 'Pick up Tom from airport', done: false, id: '2' },
//   { text: 'Visit party', done: false, id: '3' },
//   { text: 'Visit doctor', done: true, id: '4' },
//   { text: 'Buy meat', done: true, id: '5' },
// ];

// const renderTasks = tasksList => {
//   listElem.innerHTML = '';
//   const tasksElems = tasksList
//     .slice()
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.setAttribute('data-id', id);
//       checkbox.checked = done;
//       checkbox.classList.add('list__item-checkbox');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// renderTasks(tasks);

// const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskData = tasks.find(task => task.id === e.target.dataset.id);
//   Object.assign(taskData, { done: e.target.checked });
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);

// const onCreateTask = () => {
//   const taskTitleInputElem = document.querySelector('.task-input');

//   const text = taskTitleInputElem.value;

//   if (!text) {
//     return;
//   }
//   taskTitleInputElem.value = '';

//   tasks.push({
//     text,
//     done: false,
//     id: Math.random().toString(),
//   });
//   renderTasks(tasks);
// };

// const createBtnElem = document.querySelector('.create-task-btn');
// createBtnElem.addEventListener('click', onCreateTask);