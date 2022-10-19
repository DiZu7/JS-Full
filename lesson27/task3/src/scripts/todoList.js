import { onCreateNewTask } from './createNewTask.js';
import { onSwitchTask } from './switchTask.js';

export function initTodoListHandlers() {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateNewTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onSwitchTask);
}
