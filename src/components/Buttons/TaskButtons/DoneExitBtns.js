import React from 'react'
import PropTypes from 'prop-types'
import './DoneExitBtns.scss'


const DoneExitBtns = ({ update, cancel }) => {
    return (
        <div className="done-exit-btns">
            <i className="done-exit-btns__btn-done" onClick={update}></i>
            <i className="done-exit-btns__btn-exit-edit" onClick={cancel}></i>
        </div>
    )

}

DoneExitBtns.propTypes = {
    update: PropTypes.func,
    cancel: PropTypes.func
}

export default DoneExitBtns