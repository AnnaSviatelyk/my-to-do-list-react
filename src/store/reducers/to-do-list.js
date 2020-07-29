import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    tasks: [],
    error: null,
    data: null
}

//FETCH
const fetchTasksSuccess = (state, action) => {
    return updateObj(state, { tasks: action.tasks, error: null, loading: false })
}

const fetchTasksFail = (state, action) => {
    return updateObj(state, { error: action.error, loading: false })
}


//POST
const postTasksFail = (state, action) => {
    return updateObj(state, { error: action.error })
}

const postTasksSuccess = (state, action) => {
    let updatedTasks = [...state.tasks]
    updatedTasks.push({
        ...action.task
    })
    return updateObj(state, { tasks: updatedTasks, error: null })
}

//PUT
const putTaskSuccess = (state, action) => {
    const updatedTasks = [...state.tasks]
    updatedTasks.forEach(cur => {
        if (cur.id === action.id) {
            cur.description = action.description
        }
    })

    return updateObj(state, { tasks: updatedTasks })
}

const putTaskFail = (state, action) => {
    return updateObj(state, { error: action.error })
}


//DELETE
const deleteOrFinishTaskSuccess = (state, action) => {
    const updatedTasks = state.tasks.filter((cur => cur.id !== action.id))
    return updateObj(state, { tasks: updatedTasks })
}

const deleteOrFinishTaskFail = (state, action) => {
    return updateObj(state, { error: action.error })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS_SUCCESS: return fetchTasksSuccess(state, action)
        case actionTypes.FETCH_TASKS_FAIL: return fetchTasksFail(state, action)

        case actionTypes.POST_TASKS_SUCCESS: return postTasksSuccess(state, action)
        case actionTypes.POST_TASKS_FAIL: return postTasksFail(state, action)

        case actionTypes.PUT_TASK_SUCCESS: return putTaskSuccess(state, action)
        case actionTypes.PUT_TASK_FAIL: return putTaskFail(state, action)

        case actionTypes.DELETE_OR_FINISH_TASK_SUCCESS: return deleteOrFinishTaskSuccess(state, action)
        case actionTypes.DELETE_OR_FINISH_TASK_FAIL: return deleteOrFinishTaskFail(state, action)
        default: return state
    }

}

export default reducer