import { renderTasks } from './renderTask.js';
import { getItem, setItem } from './storage.js';

export const onSwitchTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
};
