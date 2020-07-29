import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId

    }
}

export const authBtnClick = (isSignUp, isFormShown) => {
    return {
        type: actionTypes.AUTH_BTN_CLICK,
        isSignUp,
        isFormShown
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error

    }
}

export const closeForm = () => {
    return {
        type: actionTypes.CLOSE_FORM,
        isFormShown: false,
        error: null
    }
}

export const switchAuthMode = (isSignUp) => {
    return {
        type: actionTypes.SWITCH_AUTH_MODE,
        isSignUp
    }
}

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }

}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const auth = (username, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())

        const authData = {
            username: username,
            email: `${username}@todo.list`,
            password: password,
            returnSecureToken: true
        }
        console.log(authData.username)

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTkC5sKi6tMveqTPRvodHeA42E495rGng'

        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTkC5sKi6tMveqTPRvodHeA42E495rGng'
        }

        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.localId)
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(error => {
                const errorMessage = error.response.data.error.message.toLowerCase().split('_').join(' ')

                dispatch(authFail(errorMessage))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}