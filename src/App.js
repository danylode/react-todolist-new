import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import CreateTaskForm from './Components/Tasks/CreateTaskForm';

function App() {

  let testLists = [
    { name: 'test 1', id: 1 },
    { name: 'test 2', id: 2 }
  ]

  let testTasks = [
    { id: 1,listId: 1, name: 'Test task 1' },
    { id: 2,listId: 1, name: 'Test task 2 in list 1' },
    { id: 3,listId: 2, name: 'test task 2' }
  ]

  let [todoLists, setTodoLists] = useState(testLists);
  let [allTasks, setAllTasks] = useState(testTasks);

  let [currentListId, setCurrentListId] = useState(1);

  let changeList = (listId) => {
    setCurrentListId(listId);
  }

  let addTask = (task) => {
    setAllTasks([...allTasks, task]);
  }

  return (
    <div className="App">
      <TodoListSidebar lists={todoLists} clickHandler={changeList} />
      <div id="tasks">
        <Tasks tasks={allTasks} listId={currentListId}/>
        <CreateTaskForm onSubmit={addTask} listId={currentListId}/>
      </div>
      
    </div>
  );
}

export default App;
