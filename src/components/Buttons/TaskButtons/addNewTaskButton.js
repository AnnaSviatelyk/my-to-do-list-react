import React from 'react'
import PropTypes from 'prop-types'
import './addNewTaskButton.scss'

const AddTaskBtn = ({ click, children }) => {
    return (
        <div className="new-item" onClick={click}>
            <i className="new-item__plus-icon"></i>
            <span className="new-item__label">{children}</span>
        </div>
    )
}

AddTaskBtn.propTypes = {
    click: PropTypes.func
}
export default AddTaskBtn