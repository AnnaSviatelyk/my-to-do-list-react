import React from 'react'
import PropTypes from 'prop-types'
import '../../Tasks/Task.scss'


const DoneExitBtns = ({ update, cancel }) => {
    return (
        <div className="task__btns">
            <i className="task__btn-done" onClick={update}></i>
            <i className="task__btn-exit-edit" onClick={cancel}></i>
        </div>
    )

}

DoneExitBtns.propTypes = {
    update: PropTypes.func,
    cancel: PropTypes.func
}

export default DoneExitBtns