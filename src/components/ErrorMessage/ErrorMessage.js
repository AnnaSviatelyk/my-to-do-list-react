import React from 'react'
import PropTypes from 'prop-types'
import './ErrorMessage.scss'
import AuthBtn from '../Buttons/AuthBtns/AuthBtn/AuthBtn'

const ErrorMessage = ({ errorMessage, click }) => (
    <div className='error'>
        <span className='error__label'>Error!</span>
        <p className='error__message'>{errorMessage}</p>
        <AuthBtn type='with-background' click={click}>Ok</AuthBtn>
    </div>

)

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
    click: PropTypes.func
}

export default ErrorMessage