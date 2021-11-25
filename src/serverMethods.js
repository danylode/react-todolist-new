const corePath = 'http://localhost:5000/api/';
const getLists = corePath + 'lists';
const getAllTasksEndpoint = corePath + 'tasks/all';
const postTaskEndpoint = corePath + 'tasks?listId=';
const deleteTaskEndpoint = corePath + 'tasks/';
const patchTaskEndpoint = corePath + 'tasks/'

export default {
  getListsMethod: () => {
    return fetch(getLists, {
      method: 'GET'
    }).then(request => request.json())
  },
  getTasksMethod: () => {
    return fetch(getAllTasksEndpoint, {
      method: 'GET'
    }).then(request => request.json())
  },

  deleteMethod: (taskId) => {
    return fetch(deleteTaskEndpoint + taskId, {
      method: 'DELETE'
    }).then(response => response.json());
  },

  postMethod: (listId, task) => {
    return fetch(postTaskEndpoint + listId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(response => response.json());
  },

  patchMethod: (task) => {
    console.log(patchTaskEndpoint + task.taskId);
    let taskObject = [{
      "path": "Done",
      "op": "add",
      "value": task.taskDone
    }]
    return fetch(patchTaskEndpoint + task.taskId, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json-patch+json"
      },
      body: JSON.stringify(taskObject)
    }).then((response) => response.json())
  }
}