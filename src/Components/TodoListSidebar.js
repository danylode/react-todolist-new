import React from 'react'

import List from './List';

export default function TodoListSidebar(props) {
    let lists = props.lists;
    return (
        <div id="todolist-sidebar">
            {
                lists.map((list) => <List key={list.listId} list={list} clickHandler={props.clickHandler} />)
            }
        </div>
    )
}
