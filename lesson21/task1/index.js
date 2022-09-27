'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const tasksListElems = tasksList.map(({ text, done }) => {
    const tasksListElem = document.createElement('li');
    tasksListElem.classList.add('list__item');
    if (done) {
      tasksListElem.classList.add('list__item_done');
    }
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');
    tasksListElem.append(checkboxElem, text);

    return tasksListElem;
  });

  listElem.append(...tasksListElems);
};

renderTasks(tasks);
