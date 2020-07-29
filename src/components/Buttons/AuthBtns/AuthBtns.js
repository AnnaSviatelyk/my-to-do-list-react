import React from 'react'
import AuthBtn from './AuthBtn/AuthBtn'

const authBtns = ({ click }) => (
    <div className='authBtns-container'>
        <AuthBtn type='with-border' click={() => click(false, true)}>Login</AuthBtn>
        <AuthBtn type='with-background' click={() => click(true, true)}>Register</AuthBtn>
    </div>
)

export default authBtns