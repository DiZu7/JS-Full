//  algo
// function getTasksList
// call "fetch" with baseUrl
// use "then" with callback (response => response.json())
// return fetch

// function getTaskById(taskId)
// call "fetch" with baseUrl
// use "then" with callback (response => response.json())
// use "then" with callback ( filter array of tasks )
// return fetch

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  return fetch(baseUrl).then(response => response.json());
}

export function getTaskById(taskId) {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasksList => tasksList.filter(taskData => taskId === taskData.id));
}
