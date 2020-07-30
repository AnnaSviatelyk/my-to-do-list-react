import React from 'react'
import './AddTask.scss'


const AddTask = ({ value, cancelClick, onChange, onAdd }) => {
    const keyPressHandler = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (event.target.value !== '') {
                onAdd(value.length)
            }
        }
    }

    return (
        <div className="add-new-item">
            <div className="add-new-item__description-field">
                <input
                    type="text"
                    className="add-new-item__description"
                    placeholder="E.g. Start working on new project..."
                    onChange={onChange}
                    onKeyDown={keyPressHandler}
                />
            </div>

            <div className="add-new-item__buttons">
                <button className={`add-new-item__btn-add-task ${value.length ? '' : ' add-new-item__btn-add-task--disabled'}`} onClick={() => onAdd(value.length)}> Add task</button>
                <button className="add-new-item__btn-cancel" onClick={cancelClick}>Cancel</button>
            </div>
        </div>
    )
}

export default AddTask