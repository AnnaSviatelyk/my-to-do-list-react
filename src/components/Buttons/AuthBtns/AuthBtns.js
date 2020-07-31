import React from 'react'
import PropTypes from 'prop-types'
import AuthBtn from './AuthBtn/AuthBtn'

const AuthBtns = ({ click }) => (
    <div className='authBtns-container'>
        <AuthBtn type='border' click={() => click(false, true)}>Login</AuthBtn>
        <AuthBtn click={() => click(true, true)}>Register</AuthBtn>
    </div>
)

AuthBtns.propTypes = {
    click: PropTypes.func
}
export default AuthBtns