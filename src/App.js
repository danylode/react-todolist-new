import './App.css';
import React, { useState, useEffect } from 'react';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import CreateTaskForm from './Components/Tasks/CreateTaskForm';

function App() {
  let [currentListId, setCurrentListId] = useState(0);

  let changeList = (listId) => {
    setCurrentListId(listId);
  }

  return (
    <div className="App">
      <TodoListSidebar clickHandler={changeList} />
      <div id="tasks">
        <Tasks listId={currentListId} />
        <CreateTaskForm listId={currentListId} />
      </div>

    </div>
  );
}

export default App;
