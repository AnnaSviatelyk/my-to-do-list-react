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

const authLogout = (state, action) => {
    return updateObj(state, {
        token: null,
        userId: null,
        error: null
    })
}

const authBtnClick = (state, action) => {
    return updateObj(state, {
        isSignUp: action.isSignUp,
        isFormShown: action.isFormShown
    })
}

const backDropClick = (state) => {
    return updateObj(state, {
        isFormShown: false,
        error: null
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.SWITCH_AUTH_MODE: return switchAuthMode(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
        case actionTypes.AUTH_BTN_CLICK: return authBtnClick(state, action)
        case actionTypes.BACKDROP_CLICK: return backDropClick(state, action)
        default: return state

    }
}

export default reducer