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
    return async dispatch => {
        try {
            const queryParams = '?auth=' + token
            const res = await axios.get('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '.json' + queryParams)
            const fetchedTasks = []
            for (let key in res.data) {
                fetchedTasks.push({
                    ...res.data[key],
                    id: key
                })
            }
            dispatch(fetchTasksSuccess(fetchedTasks ? fetchedTasks : []))
        } catch (error) {
            dispatch(fetchTasksFail(error.message))
        }
    }
}

//POST
export const postTaskSuccess = (task) => {
    return {
        type: actionTypes.POST_TASK_SUCCESS,
        task
    }
}

export const updateTaskWithRealId = (key, realId) => {
    return {
        type: actionTypes.UPDATE_ID_SUCCESS,
        key,
        realId
    }
}

export const postTaskFail = (error, key) => {
    return {
        type: actionTypes.POST_TASK_FAIL,
        error,
        key
    }
}

export const postTask = (token, task) => {
    return async dispatch => {
        try {
            dispatch(postTaskSuccess({ ...task, id: null }))
            const res = await axios.post('https://my-to-do-list-on-react.firebaseio.com/tasks/' + task.userId + '.json?auth=' + token, { ...task })
            const id = res.data.name
            dispatch(updateTaskWithRealId(task.key, id))
        } catch (error) {
            dispatch(postTaskFail(error.message, task.key))
        }
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
    return async dispatch => {
        try {
            const queryParams = '?auth=' + token
            axios.put('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '/' + taskId + '.json' + queryParams, { ...task, description: task.description })
            dispatch(putTaskSuccess(task.description, taskId))
        } catch (error) {
            dispatch(putTaskFail(error.message))
        }
    }
}

//DELETE
export const deleteOrFinishTaskSuccess = (id) => {
    return {
        type: actionTypes.DELETE_OR_FINISH_TASK_SUCCESS,
        id
    }
}

export const deleteOrFinishTaskFail = (error) => {
    return {
        type: actionTypes.DELETE_OR_FINISH_TASK_FAIL,
        error
    }
}

export const deleteTask = (token, taskId, userId) => {
    return async dispatch => {
        try {
            const queryParams = '?auth=' + token
            dispatch(deleteOrFinishTaskSuccess(taskId))
            await axios.delete('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '/' + taskId + '.json' + queryParams)
        } catch (error) {
            const errorMessage = error.message.toLowerCase().split('_').join(' ')
            dispatch(deleteOrFinishTaskFail(errorMessage))

        }
    }
}