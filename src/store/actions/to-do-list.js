import * as actionTypes from './actionTypes'
import axios from 'axios'


//FETCH
export const fetchTasksSuccess = (tasks) => {
    return {
        type: actionTypes.FETCH_TASKS_SUCCESS,
        tasks
    }
}

export const fetchTasksFail = (error) => {
    return {
        type: actionTypes.FETCH_TASKS_FAIL,
        error
    }
}

export const fetchTasks = (token, userId) => {
    return dispatch => {
        const queryParams = '?auth=' + token
        axios.get('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '.json' + queryParams)
            .then(res => {
                const fetchedTasks = []
                for (let key in res.data) {
                    fetchedTasks.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchTasksSuccess(fetchedTasks ? fetchedTasks : []))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')
                dispatch(fetchTasksFail(errorMessage))
            }
            )
    }
}

//POST
export const postTasksSuccess = (task) => {
    return {
        type: actionTypes.POST_TASKS_SUCCESS,
        task
    }
}

export const postTasksFail = (error) => {
    return {
        type: actionTypes.POST_TASKS_FAIL,
        error
    }
}

export const postTask = (token, task) => {
    return dispatch => {
        axios.post('https://my-to-do-list-on-react.firebaseio.com/tasks/' + task.userId + '.json?auth=' + token, { ...task })
            .then(res => {
                dispatch(postTasksSuccess({ ...task, id: res.data.name }))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')
                dispatch(postTasksFail(errorMessage))
            })

    }
}

//PUT
export const putTaskSuccess = (description, id) => {
    return {
        type: actionTypes.PUT_TASK_SUCCESS,
        description,
        id

    }
}

export const putTaskFail = (error) => {
    return {
        type: actionTypes.PUT_TASK_FAIL,
        error
    }
}

export const putTask = (token, task, taskId, userId) => {
    console.log(taskId)
    return dispatch => {
        const queryParams = '?auth=' + token
        axios.put('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '/' + taskId + '.json' + queryParams, { ...task, description: task.description })
            .then(res => {
                dispatch(putTaskSuccess(task.description, taskId))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')
                dispatch(putTaskFail(errorMessage))
            })
    }
}


//DELETE
export const deleteOrFinishTaskSuccess = (id) => {
    return {
        type: actionTypes.DELETE_OR_FINISH_TASK_SUCCESS,
        id
    }
}

export const deleteOrFinishTaskFail = () => {
    return {
        type: actionTypes.DELETE_OR_FINISH_TASK_FAIL
    }
}

export const deleteTask = (token, taskId, userId) => {
    return dispatch => {
        const queryParams = '?auth=' + token
        axios.delete('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '/' + taskId + '.json' + queryParams)
            .then(res => {
                dispatch(deleteOrFinishTaskSuccess(taskId))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')
                dispatch(deleteOrFinishTaskFail(errorMessage))
            })
    }
}

