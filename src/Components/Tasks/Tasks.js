import React, { useState } from 'react'

import Task from './Task'

export default function Tasks(props) {
    let tasks = props.tasks.filter((task) => task.taskListId === props.listId);
    return (
        <div id="content">
            {tasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={props.deleteHandler} changeHandler={props.changeHandler}/>)}
        </div>
    )
}
