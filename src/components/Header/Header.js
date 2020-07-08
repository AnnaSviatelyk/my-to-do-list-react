import React from 'react'
import './Header.scss'
import { getCurrentTime } from '../../helpers/helpers'
import Line from '../../sharedComponent/Line/Line'


const { day, month, year, hours, minutes } = getCurrentTime();


const header = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo-data">
                    <h1 className="header__logo">My To-Do List</h1>
                    <span className="header__byme">By Anna Sviatelyk</span>
                </div>
                <div className="header__date-and-time">
                    <span className="header__data-label">Today</span>
                    <span className="header__data header__data--date">{month} {day}, {year}</span>
                    <span className="header__data-label">Time</span>
                    <span className="header__data header__data--time">{hours}:{minutes}</span>
                </div>
            </header>
            <Line />
        </>
    )
}



export default header