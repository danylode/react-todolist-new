import './App.css';
import React, { useState, useEffect } from 'react';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import CreateTaskForm from './Components/Tasks/CreateTaskForm';


const corePath = 'http://localhost:5000/api/';
const getLists = corePath + 'lists';
const getTasksEndpoint = corePath + 'tasks?listId=16&all=true';
const postTaskEndpoint = corePath + 'tasks?listId=16';
const deleteTaskEndpoint = corePath + 'tasks/';
const patchTaskEndpoint = corePath + 'tasks/'

function App() {

  let testLists = [
    { name: 'test 1', id: 1 },
    { name: 'test 2', id: 2 }
  ]

  let testTasks = [
    { id: 1, listId: 1, name: 'Test task 1', description: "test desc", date: new Date("2021-10-10"), done: true },
    { id: 2, listId: 1, name: 'Test task 2 in list 1', date: new Date("2021-12-26"), done: false },
    { id: 3, listId: 1, name: 'test task 2', description: "test desc", done: true }
  ]

  let [todoLists, setTodoLists] = useState(testLists);
  let [allTasks, setAllTasks] = useState(testTasks);

  let [currentListId, setCurrentListId] = useState(16);

  let changeList = (listId) => {
    setCurrentListId(listId);
  }

  let addTask = (task) => {
    setAllTasks([...allTasks, task]);
  }

  let deleteTask = (taskId) => {
    //setAllTasks(/*allTasks.splice(, 1)*/);
    console.log(allTasks.filter((task) => task.id == taskId));
  }



  //Server methods
  let getMethod = (endPoint) => {
    return fetch(endPoint, {
      method: 'GET'
    }).then(request => request.json())
  }

  //Get Lists
  useEffect(() => {
    getMethod(getLists).then((data) => setTodoLists(data));
    getMethod(getTasksEndpoint).then((data) => setAllTasks(data));
  }, [])


  return (
    <div className="App">
      <TodoListSidebar lists={todoLists} clickHandler={changeList} />
      <div id="tasks">
        <Tasks tasks={allTasks} listId={currentListId} onDelete={deleteTask} />
        <CreateTaskForm onSubmit={addTask} listId={currentListId} />
      </div>

    </div>
  );
}

export default App;
