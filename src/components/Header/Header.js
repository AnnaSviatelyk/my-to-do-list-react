import React from 'react'
import './Header.scss'
import { getCurrentTime } from '../../helpers/helpers'
import Line from '../../sharedComponent/Line/Line'
import Logo from '../Logo/Logo'


const { day, month, year, hours, minutes } = getCurrentTime();


const Header = () => {
    return (
        <>
            <header className="header">
                <Logo />
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



export default Header