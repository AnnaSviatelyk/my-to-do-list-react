import React from 'react'
import './Tasks.scss'
import Task from './Task'
import './Task.scss'
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
                            key={el.id}
                            timeout={300}
                            classNames="task"
                        >
                            <Task data={el} />
                        </CSSTransition>
                    )
                })
            }

        </TransitionGroup>
    )

}

export default Tasks