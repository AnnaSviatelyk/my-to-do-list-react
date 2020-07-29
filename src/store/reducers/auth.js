import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    isSignUp: false,
    isFormShown: false,
    loading: false,

    token: null,
    userId: null,
    error: null
}

const authStart = (state) => {
    return updateObj(state, {
        error: null,
        loading: true
    })
}

const authSuccess = (state, action) => {
    return updateObj(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isFormShown: false
    })
}

const authFail = (state, action) => {
    return updateObj(state, {
        error: action.error,
        loading: false
    })
}

const switchAuthMode = (state, action) => {
    return updateObj(state, { isSignUp: action.isSignUp })
}

const authLogout = (state) => {
    return updateObj(state, {
        token: null,
        userId: null
    })
}

const authBtnClick = (state, action) => {
    return updateObj(state, {
        isSignUp: action.isSignUp,
        isFormShown: action.isFormShown
    })
}

const closeForm = (state, action) => {
    return updateObj(state, {
        isFormShown: action.isFormShown,
        error: action.error
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.SWITCH_AUTH_MODE: return switchAuthMode(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state)
        case actionTypes.AUTH_BTN_CLICK: return authBtnClick(state, action)
        case actionTypes.CLOSE_FORM: return closeForm(state, action)
        default: return state

    }
}

export default reducer