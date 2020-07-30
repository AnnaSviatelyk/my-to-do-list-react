import React from 'react'
import PropTypes from 'prop-types'
import './Line.scss'
const Line = ({ className = '' }) => {
    return (
        <div className={`line ${className}`}></div>
    )
}

Line.propTypes = {
    className: PropTypes.string
}

export default Line 