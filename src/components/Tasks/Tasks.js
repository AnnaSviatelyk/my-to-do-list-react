import React from 'react'
import PropTypes from 'prop-types'
import './Tasks.scss'
import Task from './Task'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';



const Tasks = ({ tasks }) => {
    return (
        <TransitionGroup className="tasks-container">
            {
                tasks.map(el => {
                    return (
                        <CSSTransition
                            key={el.key}
                            timeout={300}
                            classNames="task"
                            unmountOnExit
                        >
                            <Task data={el} />
                        </CSSTransition>
                    )
                })
            }

        </TransitionGroup>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks