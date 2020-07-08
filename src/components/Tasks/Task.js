import React, { useState, useEffect, useRef, useContext } from 'react'
import './Task.scss'
import Line from '../../sharedComponent/Line/Line'
import DoneExitBtns from '../DoneExitBtns'
import EditBtnInput from '../EditBtnInput'
import TaskContext from '../../context/task-context'

const Task = ({ data }) => {
    const taskContext = useContext(TaskContext)

    const [isEdit, setIsEdit] = useState(false)
    const [spanHeight, setSpanHeight] = useState(37)
    const [initialValue, setNewValue] = useState(data.description)


    const spanRef = useRef(null)


    const documentClickHandler = (event) => {
        const ignoringElements = ['task__edit-input-text', 'task__btn-done', 'task__btn-exit-edit']
        const className = event.target.classList[0]
        if (!ignoringElements.includes(className)) { closeEditTextArea() }
    }

    const openEditTextArea = () => {
        setIsEdit(true)
    }

    useEffect(() => {
        const spanHeight = spanRef.current.offsetHeight
        setSpanHeight(spanHeight)
    }, [])

    useEffect(() => {
        if (isEdit) {
            document.addEventListener('click', documentClickHandler)
        }
        return () => document.removeEventListener('click', documentClickHandler)
    }, [isEdit])


    const closeEditTextArea = () => {
        setIsEdit(false)
        taskContext.onUpdate(initialValue, data.id)
    }

    const updateValue = (event) => {
        const value = event.target.value
        setNewValue(value)
    }


    const cancelValueUpdate = () => {
        setIsEdit(false)
        setNewValue(data.description)
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
                                        strokeLinecap="round" onAnimationEnd={() => taskContext.finishedOrDeletedClickHandler(data.id)} /></svg>
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
                        <i className="task__btn-delete" onClick={() => taskContext.finishedOrDeletedClickHandler(data.id)}></i>
                    </div>)
                }
            </div>
            <Line className='line__in-task' />
        </div >
    )

}

export default Task