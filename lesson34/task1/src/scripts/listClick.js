import { onToggleTask } from './updateTask.js';
import { deleteTask, getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
import { renderTasks } from './renderTask.js';

export const onListClick = e => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const taskId = e.target.dataset.id;
  if (isDeleteBtn) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  onToggleTask(e);
};
