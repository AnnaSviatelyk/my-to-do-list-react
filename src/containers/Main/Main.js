import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import { connect } from 'react-redux'
import Logo from '../../components/Logo/Logo'
import AuthBtns from '../../components/Buttons/AuthBtns/AuthBtns'
import Modal from '../../sharedComponents/Modal/Modal'
import Auth from '../Auth/Auth'
import * as actions from '../../store/actions/index'
import Spinner from '../../sharedComponents/Spinner/Spinner'



class Main extends Component {
    render() {
        if (this.props.token) {
            this.props.history.push('/to-do-list')
        }

        return (
            <div className='main'>
                <Modal show={this.props.isFormShown} backDropClick={this.props.onBackdropClick}>
                    {this.props.loading ? <Spinner /> : <Auth isSignUp={this.props.isSignUp} />}
                </Modal>
                <div className='main__header'>
                    <Logo />
                </div>
                <h1 className='main__heading'>All your tasks <br /> managed in one place</h1>
                <p className='main__sub-heading'>My To-Do List is a useful tool for everyone, <br /> who wants to keep their everyday routine under control.</p>
                <AuthBtns click={this.props.onAuthBtnClick} />
                <div className="main__illustration-container" />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignUp: state.auth.isSignUp,
        isFormShown: state.auth.isFormShown,
        loading: state.auth.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthBtnClick: (isSignUp, isFormShown) => dispatch(actions.authBtnClick(isSignUp, isFormShown)),
        onBackdropClick: () => dispatch(actions.backDropClick())
    }
}


Main.propTypes = {
    isSignUp: PropTypes.bool,
    isFormShown: PropTypes.bool,
    loading: PropTypes.bool,
    token: PropTypes.string,
    onAuthBtnClick: PropTypes.func,
    onBackdropClick: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)