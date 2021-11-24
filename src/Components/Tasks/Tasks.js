import React, { useState } from 'react'

import Task from './Task'

export default function Tasks(props) {
    console.log(props.tasks);
    let tasks = props.tasks.filter((task) => task.taskListId === props.listId)

    return (
        <div id="content">
            {tasks.map((task) => <Task key={task.id} task={task} onDelete={props.onDelete}/>)}
        </div>
    )
}
