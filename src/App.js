import './App.css';
import React, { useState, useEffect } from 'react';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import CreateTaskForm from './Components/Tasks/CreateTaskForm';
import serverMethods from './serverMethods';

function App() {
  let [todoLists, setTodoLists] = useState([]);
  let [allTasks, setAllTasks] = useState([]);
  let [currentListId, setCurrentListId] = useState(0);

  let changeList = (listId) => {
    setCurrentListId(listId);
  }

  let addTask = (listId, task) => {
    serverMethods.postMethod(listId, task).then((data) => setAllTasks(data));
  }

  let deleteTask = (taskId) => {
    serverMethods.deleteMethod(taskId).then((data) => setAllTasks(data));
  }

  let patchDoneState = (task) => {
    serverMethods.patchMethod(task).then((data) => setAllTasks(data));
  }

  //Get Lists
  useEffect(() => {
    serverMethods.getListsMethod().then((data) => setTodoLists(data));
    serverMethods.getTasksMethod().then((data) => {
      if (data != null) {
        setAllTasks(data);
        /*let minListId = () => {
          return data.map((x) => {x.listId});
        }
        //console.log(minListId());*/
        setCurrentListId(data[0].taskListId);
      }
    });
  }, [])

  return (
    <div className="App">
      <TodoListSidebar lists={todoLists} clickHandler={changeList} />
      <div id="tasks">
        <Tasks tasks={allTasks} listId={currentListId} deleteHandler={deleteTask} changeHandler={patchDoneState} />
        <CreateTaskForm onSubmit={addTask} listId={currentListId} />
      </div>

    </div>
  );
}

export default App;
