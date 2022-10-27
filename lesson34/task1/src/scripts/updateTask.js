import { renderTasks } from './renderTask.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;

  const tasksList = getItem('tasksList');
  const { text } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
