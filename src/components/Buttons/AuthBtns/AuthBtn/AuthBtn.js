import React from 'react'
import PropTypes from 'prop-types'
import './AuthBtn.scss'


const AuthBtn = ({ children, type, click, disabled }) => {
    let className = null
    if (type === 'with-background') { className = 'authBtn' }
    if (type === 'with-border') { className = 'authBtn authBtn--with-border' }
    if (type === 'text-btn') { className = 'authBtn authBtn--text' }
    if (type === 'with-background-wide') { className = 'authBtn authBtn--wide' }

    return (
        <button className={className} onClick={click} disabled={disabled}>{children}</button>
    )

}

AuthBtn.propTypes = {
    type: PropTypes.string,
    click: PropTypes.func,
    disabled: PropTypes.bool
}

export default AuthBtn