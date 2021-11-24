import React from 'react'

import Task from './Task'

export default function Tasks(props) {
    let tasks = props.tasks.filter((task) => task.listId == props.listId);
    return (
        <div id="content">
            {tasks.map((task) => <Task key={task.id} task={task} />)}
        </div>
    )
}
