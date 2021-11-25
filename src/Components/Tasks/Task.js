import React from 'react'
import classNames from 'classnames';

export default function Task(props) {
    let task = props.task;

    //Events
    let onDelete = () => {
        props.deleteHandler(task.taskId);
    }

    let onDoneChange = (event) => {
        task.taskDone = event.target.checked;
        props.changeHandler(task);
    }

    return (
        <div className="task">
            <div className="task-status">
                <h1 className={classNames("task-name", {"task-done": task.taskDone})}>{task.taskName}</h1>
                <input className="task-checkbox" type="checkbox" defaultChecked={task.taskDone} onChange={onDoneChange}/>
                <button className="delete-btn" onClick={onDelete}>X</button>
            </div>
            <p className={classNames("task-description", {"nonvisible": task.taskDescription == null})}>{task.taskDescription}</p>
            {task.taskDate != null ? <p className={classNames({"date-red": task.taskDate && new Date() > new Date(task.taskDate)})}>{task.taskDate.split("T")[0]}</p> : null}
        </div>
    )
}
