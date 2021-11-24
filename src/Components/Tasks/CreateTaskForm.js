import React from 'react'

export default function CreateTaskForm(props) {

    let currentList = props.listId;
    let onSubmit = (event) => {
        event.preventDefault();
        let newTask = {
            listId: currentList,
            name: event.target[0].value,
            description: event.target[1].value
        }
        props.onSubmit(newTask);
    }

    return (
        <form id="add-task-form" onSubmit={onSubmit}> 
            <input placeholder="name"/>
            <input placeholder="description"/>
            <button type="submit">Add</button>
        </form>
    )
}
