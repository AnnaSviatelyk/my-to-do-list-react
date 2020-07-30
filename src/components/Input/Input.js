import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({ elementConfig, invalid, shouldValidate, touched, value, changed, label }) => {
    const inputClasses = ['input']

    if (invalid && shouldValidate && touched) {
        inputClasses.push('input--invalid')
    }

    let inputElement = <input
        autoComplete="off"
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={changed}
    />

    return (
        <div className='Input'>
            <label className='Label'>{label}</label>
            {inputElement}
            {/* {validationError} */}
        </div>
    )
}

Input.propTypes = {
    elementConfig: PropTypes.object,
    invalid: PropTypes.bool,
    shouldValidate: PropTypes.object,
    touched: PropTypes.bool,
    value: PropTypes.string,
    changed: PropTypes.func,
    label: PropTypes.string
}

export default Input