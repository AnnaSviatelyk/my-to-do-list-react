import React from 'react'
import '../Tasks/Task.scss'


const DoneExitBtns = ({ update, cancel }) => {
    return (
        <div className="task__btns">
            <i className="task__btn-done" onClick={update}></i>
            <i className="task__btn-exit-edit" onClick={cancel}></i>
        </div>
    )

}

export default DoneExitBtns