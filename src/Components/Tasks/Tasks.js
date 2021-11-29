import React from 'react'
import { useEffect, useState, useMemo } from 'react/cjs/react.development';
import serverAPI from '../../serverAPI';

import Task from './Task'

export default function Tasks(props) {
    let [tasks, setTasks] = useState([]);
    let [isAll, setIsAll] = useState(false);

    useEffect(() => {
        serverAPI.getTaskListById(props.listId).then((data) => setTasks(data));
    }, [props.listId])

    let filteredTasks = useMemo(() => {
        return isAll ? tasks : tasks.filter((task) => task.taskListId === props.listId);
    }, [tasks, isAll])

    let deleteTask = (taskId) => {
        serverAPI.deleteMethod(taskId).then((data) => setTasks(data));
    }

    let patchDoneState = (task) => {
        serverAPI.patchMethod(task).then((data) => setTasks(data));
    }

    let showAllChange = (event) => {
        setIsAll(event.target.checked);
    }

    return (
        <div id="content">
            <div id="showAllPanel">
                <input type="checkbox" onChange={showAllChange} defaultChecked />
                <label>Show all</label>
            </div>
            {filteredTasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={deleteTask} changeHandler={patchDoneState} />)}
        </div>
    )
}
