import { renderTasks } from './renderTask.js';
import { getItem, setItem } from './storage.js';

export const onCreateNewTask = () => {
  const taskInputElem = document.querySelector('.task-input');

  const text = taskInputElem.value;

  if (!text) {
    return;
  }

  taskInputElem.value = '';

  const tasksList = getItem('tasksList') || [];

  const newTaskList = tasksList.concat({ text, done: false, id: Math.random().toString() });

  setItem('tasksList', newTaskList);
  renderTasks();
};
