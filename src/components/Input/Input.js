import React from 'react'
import './Input.scss'

const input = ({ elementConfig, invalid, shouldValidate, touched, value, changed, label }) => {
    const inputClasses = ['input']

    if (invalid && shouldValidate && touched) {
        inputClasses.push('input--invalid')
    }

    let inputElement = <input
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


export default input