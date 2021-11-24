import React from 'react'

export default function Task(props) {
    let task = props.task;
    return (
        <div className="task">
            {task.listId + ": " + task.name}
        </div>
    )
}
