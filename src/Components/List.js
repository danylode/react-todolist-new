import React from 'react'

export default function List(props) {
    let list = props.list;
    let selectList = () => {
        props.clickHandler(list.id);
    }

    return (
        <div className="list" onClick={selectList}>
            {list.id + ': ' + list.name}
        </div>
    )
}
