import React from 'react'
import PropTypes from 'prop-types'
import './AuthBtn.scss'


const AuthBtn = ({ children, type, click, disabled }) => {
    let className = null
    if (type === 'full') { className = 'authBtn' }
    if (type === 'border') { className = 'authBtn authBtn--with-border' }
    if (type === 'secondary') { className = 'authBtn authBtn--text' }
    if (type === 'block') { className = 'authBtn authBtn--wide' }

    return (
        <button className={className} onClick={click} disabled={disabled}>{children}</button>
    )

}

AuthBtn.propTypes = {
    type: PropTypes.oneOf(['full', 'border', 'secondary', 'block']),
    click: PropTypes.func,
    disabled: PropTypes.bool
}

export default AuthBtn