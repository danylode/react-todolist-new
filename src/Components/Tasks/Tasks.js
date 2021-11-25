import React from 'react'

import Task from './Task'

export default function Tasks(props) {
    let tasks = props.tasks.filter((task) => task.taskListId === props.listId);

    let showing = (event) => {
        document.querySelectorAll('.task').forEach((x) => {
            x.classList.toggle('nonvisible', !event.target.checked && x.getElementsByClassName('task-checkbox')[0].checked);
        });
    }

    return (
        <div id="content">
            <div id="showAllPanel">
                <input type="checkbox" onChange={showing} defaultChecked/>
                <label>Show all</label>
            </div>
            {tasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={props.deleteHandler} changeHandler={props.changeHandler} />)}
        </div>
    )
}
