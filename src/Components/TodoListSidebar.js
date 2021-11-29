import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import serverAPI from '../serverAPI';

import List from './List';

export default function TodoListSidebar(props) {
    let [lists, setLists] = useState([]);

    useEffect(() => {
        serverAPI.getDashboard().then((data) => setLists(data));
    }, []);

    return (
        <div id="todolist-sidebar">
            {
                lists.map((list) => <List key={list.listId} list={list} clickHandler={props.clickHandler} />)
            }
        </div>
    )
}
