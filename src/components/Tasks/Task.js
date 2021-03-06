import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Task.scss'
import Line from '../../sharedComponents/Line/Line'
import DoneExitBtns from '../Buttons/TaskButtons/DoneExitBtns'
import EditBtnInput from '../Buttons/TaskButtons/EditBtnInput'
import * as actions from '../../store/actions/index'


const Task = ({ data, onFinishOrDeleteTask, onPutTaskUpdate, token, userId }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [spanHeight, setSpanHeight] = useState(37)
    const [initialValue, setNewValue] = useState(data.description)
    const spanRef = useRef(null)

    const task = {
        description: initialValue,
        userId: userId
    }

    const documentClickHandler = (event) => {
        const ignoringElements = ['input__edit-input-text', 'task__btn-done', 'task__btn-exit-edit']
        const className = event.target.classList[0]
        if (!ignoringElements.includes(className)) { closeEditTextArea() }
    }

    const openEditTextArea = () => { setIsEdit(true) }

    useEffect(() => {
        const spanHeight = spanRef.current.offsetHeight
        setSpanHeight(spanHeight)
    }, [])

    useEffect(() => {
        if (isEdit) {
            document.addEventListener('click', documentClickHandler)
        }
        return () => document.removeEventListener('click', documentClickHandler)
        // eslint-disable-next-line
    }, [isEdit, initialValue])


    const closeEditTextArea = () => {
        if (initialValue.length > 0) {
            setIsEdit(false)
            onPutTaskUpdate(token, task, data.id, userId)
        }
    }

    const updateValue = (event) => {
        const value = event.target.value
        setNewValue(value)
    }

    const cancelValueUpdate = () => {
        setIsEdit(false)
        setNewValue(data.description)
    }

    const finishOrDeleteTask = () => {
        onFinishOrDeleteTask(token, data.id, userId)
    }

    return (
        <div className="task">
            <div className="task__content-wrapper">
                <div className="task__description">
                    {isEdit ? <EditBtnInput change={updateValue} closeTextArea={closeEditTextArea} value={initialValue} spanHeight={spanHeight} /> : (
                        <>
                            <label className='task__checkbox' >
                                <input type="checkbox" name="check" />
                                <svg version="1.1" className="task__checkbox_svg" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                                    style={{ enableBackground: "new 0 0 100 100" }} xmlSpace="preserve">
                                    <polyline className="task__checkbox_line" points="3.5,45.5 40.5,82.5 95.7,15.3 "
                                        strokeLinecap="round" onAnimationStart={finishOrDeleteTask} /></svg>
                            </label>

                            <span className="task__name" ref={spanRef}>{initialValue}</span>
                        </>
                    )}
                </div>
                {isEdit ?
                    <DoneExitBtns update={closeEditTextArea} cancel={cancelValueUpdate} />
                    :
                    (<div className="task__btns">
                        <i className="task__btn-edit" onClick={openEditTextArea}></i>
                        <i className="task__btn-delete" onClick={finishOrDeleteTask}></i>
                    </div>)
                }
            </div>
            <Line className='line__in-task' />
        </div >
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFinishOrDeleteTask: (token, taskId, userId) => dispatch(actions.deleteTask(token, taskId, userId)),
        onPutTaskUpdate: (token, task, taskId, userId) => dispatch(actions.putTask(token, task, taskId, userId))
    }
}


Task.propTypes = {
    data: PropTypes.object,
    onFinishOrDeleteTask: PropTypes.func,
    onPutTaskUpdate: PropTypes.func,
    token: PropTypes.string,
    userId: PropTypes.string,
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)