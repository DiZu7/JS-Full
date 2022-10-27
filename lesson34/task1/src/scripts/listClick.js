import { onToggleTask } from './updateTask.js';
import { deleteTask } from './tasksGateway.js';

export const onListClick = e => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const taskId = e.target.dataset.id;
  if (isDeleteBtn) {
    deleteTask(taskId);
  }
  onToggleTask(e);
};
