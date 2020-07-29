import React from 'react'
import './AuthBtn.scss'


const authBtn = ({ children, type, click, disabled }) => {
    let className = null
    if (type === 'with-background') { className = 'authBtn' }
    if (type === 'with-border') { className = 'authBtn authBtn--with-border' }
    if (type === 'text-btn') { className = 'authBtn authBtn--text' }
    if (type === 'with-background-wide') { className = 'authBtn authBtn--wide' }

    return (
        <button className={className} onClick={click} disabled={disabled}>{children}</button>
    )

}


export default authBtn