import React from 'react'
import PropTypes from 'prop-types'
import './AuthBtn.scss'


const AuthBtn = ({ children, type, click, disabled = false }) => {
    let modifierClass = ''
    if (type === 'border') { modifierClass = 'auth-btn--with-border' }
    if (type === 'secondary') { modifierClass = 'auth-btn--secondary' }
    if (type === 'block') { modifierClass = 'auth-btn--block' }

    return (
        <button className={`auth-btn ${modifierClass}`} onClick={click} disabled={disabled}>{children}</button>
    )

}

AuthBtn.propTypes = {
    type: PropTypes.oneOf(['border', 'secondary', 'block']),
    click: PropTypes.func,
    disabled: PropTypes.bool
}

export default AuthBtn