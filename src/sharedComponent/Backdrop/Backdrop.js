import React from 'react'
import './Backdrop.scss'

const backdrop = ({ clicked, show }) => (
    show ? <div className='Backdrop' onClick={clicked}></div> : null
)

export default backdrop