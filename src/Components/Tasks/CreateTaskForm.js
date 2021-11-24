import React from 'react'

export default function CreateTaskForm(props) {

    let currentList = props.listId;
    let onSubmit = (event) => {
        event.preventDefault();
        let newTask = {
            title: event.target[0].value,
            done: false,
            description: event.target[1].value,
            dueDate: event.target[2].value
        }
        console.log(newTask);
        props.onSubmit(currentList, newTask);
    }

    return (
        <form id="add-task-form" onSubmit={onSubmit}>
            <input placeholder="name" />
            <input placeholder="description" />
            <input type="date" />
            <button type="submit">Add</button>
        </form>
    )
}
