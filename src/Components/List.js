import React from 'react'

export default function List(props) {
    let list = props.list;
    let selectList = () => {
        console.log(list.listId)
        props.clickHandler(list.listId);
    }

    return (
        <div className="list" onClick={selectList}>
            {'ID:' + list.listId + ' ' + list.title}
        </div>
    )
}
