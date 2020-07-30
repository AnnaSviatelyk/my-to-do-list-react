import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import './Header.scss'
import { getCurrentTime } from '../../helpers/helpers'
import Line from '../../sharedComponents/Line/Line'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import AuthBtn from '../Buttons/AuthBtns/AuthBtn/AuthBtn'


const { day, month, year, hours, minutes } = getCurrentTime();

const Header = ({ onLogout }) => {
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
                <NavLink to={'/logout'}><AuthBtn type='with-background' onClick={onLogout}>Logout</AuthBtn></NavLink>
            </header>
            <Line />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

Header.propTypes = {
    onLogout: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Header)