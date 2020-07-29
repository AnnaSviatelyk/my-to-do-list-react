import * as actionTypes from './actionTypes'
import axios from 'axios'



export const addTask = (description, id) => {
    return {
        type: actionTypes.ADD_TASK,
        description,
        id
    }
}


export const finishOrDeleteTask = (id) => {
    return {
        type: actionTypes.FINISH_OR_DELETE_TASK,
        id
    }
}


export const updateTask = (description, id) => {
    return {
        type: actionTypes.UPDATE_TASK,
        description,
        id
    }
}

export const fetchTasksStart = () => {
    return {
        type: actionTypes.FETCH_TASKS_START
    }
}

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

// export const postTasksStart = () => {
//     return {
//         type: actionTypes.POST_TASKS_START
//     }
// }


export const postTasksSuccess = (data) => {
    return {
        type: actionTypes.POST_TASKS_SUCCESS,
        data
    }
}

export const postTasksFail = (error) => {
    return {
        type: actionTypes.POST_TASKS_FAIL,
        error
    }
}

export const postTasks = (token, task, userId) => {
    console.log(userId)
    return dispatch => {
        axios.post('https://my-to-do-list-on-react.firebaseio.com/tasks/' + userId + '.json?auth=' + token, { ...task })
            .then(res => {
                dispatch(postTasksSuccess(res.data.name))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')
                dispatch(postTasksFail(errorMessage))
            })

    }
}



export const fetchTasks = (token, userId) => {
    return dispatch => {
        dispatch(fetchTasksStart())

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
                dispatch(fetchTasksFail(error))
            }
            )
    }

}