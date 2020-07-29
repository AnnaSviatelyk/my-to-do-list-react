import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'


const initialState = {
    tasks: [],
    error: null,
    data: null
}

const addTask = (state, action) => {
    let updatedTasks = [...state.tasks]

    updatedTasks.push({
        description: action.description,
        id: action.id
    })

    return updateObj(state, { tasks: updatedTasks })
}


const finishOrDeleteTask = (state, action) => {
    const updatedTasks = state.tasks.filter((cur => cur.id !== action.id))
    return updateObj(state, { tasks: updatedTasks })
}


const updateTask = (state, action) => {
    const updatedTasks = [...state.tasks]
    updatedTasks.forEach(cur => {
        if (cur.id === action.id) {
            cur.description = action.description
        }
    })

    return updateObj(state, { tasks: updatedTasks })
}


const postTasksFail = (state, action) => {
    return updateObj(state, { error: action.error })
}

const postTasksSuccess = (state, action) => {
    return updateObj(state, { data: action.data, error: null })
}


const fetchTasksSuccess = (state, action) => {
    return updateObj(state, { tasks: action.tasks, error: null })
}

const fetchTasksFail = (state, action) => {
    return updateObj(state, { error: action.error })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: return addTask(state, action)
        case actionTypes.FINISH_OR_DELETE_TASK: return finishOrDeleteTask(state, action)
        case actionTypes.UPDATE_TASK: return updateTask(state, action)
        case actionTypes.POST_TASKS_SUCCESS: return postTasksSuccess(state, action)
        case actionTypes.POST_TASKS_FAIL: return postTasksFail(state, action)
        case actionTypes.FETCH_TASKS_SUCCESS: return fetchTasksSuccess(state, action)
        case actionTypes.FETCH_TASKS_FAIL: return fetchTasksFail(state, action)
        default:
            return state

    }

}

export default reducer