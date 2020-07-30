import React from 'react'
import PropTypes from 'prop-types'
import AuthBtn from './AuthBtn/AuthBtn'

const AuthBtns = ({ click }) => (
    <div className='authBtns-container'>
        <AuthBtn type='with-border' click={() => click(false, true)}>Login</AuthBtn>
        <AuthBtn type='with-background' click={() => click(true, true)}>Register</AuthBtn>
    </div>
)

AuthBtns.propTypes = {
    click: PropTypes.func
}
export default AuthBtns