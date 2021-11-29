const corePath = 'http://localhost:5000/api/';
const getAllTasksByListId = corePath + 'tasks';
const getDashboard = corePath + 'Dashboard/npgsql';
const getTodayTasks = corePath + 'collection/today';
const postTaskEndpoint = corePath + 'tasks?listId=';
const deleteTaskEndpoint = corePath + 'tasks/';
const patchTaskEndpoint = corePath + 'tasks/'

export default {
  getTaskListById: (listId) => {
    return fetch(getAllTasksByListId + `?listId=${listId}&all=true`, {
      method: 'GET'
    }).then(request => request.json())
  },
  getDashboard: () => {
    return fetch(getDashboard, {
      method: 'GET'
    }).then(request => request.json())
  },
  getTodayTasks: () => {
    return fetch(getTodayTasks, {
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

  patchMethod: (taskId, state) => {
    let taskObject = [{
      "path": "Done",
      "op": "add",
      "value": state
    }]
    return fetch(patchTaskEndpoint + taskId, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json-patch+json"
      },
      body: JSON.stringify(taskObject)
    }).then((response) => response.json())
  }
}