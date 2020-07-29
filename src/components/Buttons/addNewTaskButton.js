import React from 'react'
import './addNewTaskButton.scss'

const addTaskBtn = (props) => {
    return (
        <div className="new-item" onClick={props.click}>
            <i className="new-item__plus-icon"></i>
            <span className="new-item__label">{props.children}</span>
        </div>
    )
}

export default addTaskBtn