import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = ({ show, backDropClick, children }) => {
    if (!show) {
        return null
    }

    return (
        <div className="Modal">
            <div className='Modal__backdrop' onClick={backDropClick} />
            <div className='Modal__body'>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    show: PropTypes.bool,
    backDropClick: PropTypes.func
}

export default Modal