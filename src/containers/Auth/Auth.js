import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import './Auth.scss'
import Input from '../../components/Input/Input'
import AuthBtn from '../../components/Buttons/AuthBtns/AuthBtn/AuthBtn'

class Auth extends Component {
    state = {
        controls: {
            userName: {
                elementConfig: {
                    type: 'input',
                    placeholder: "Username"
                },
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    onlyLettersAndNumbers: true,
                    minLength: 4
                }
            },

            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: "Password"
                },
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
        },
        errorMessage: this.props.errorMessage
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.onlyLettersAndNumbers) {
            const pattern = /^[0-9a-zA-Z]+$/
            isValid = pattern.test(value) && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid;
    }

    switchAuthModeHandler = () => { this.props.onAuthSwitchMode(!this.props.isSignUp) }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            },
        }
        this.setState({ controls: updatedControls, errorMessage: null })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.userName.value, this.state.controls.password.value, this.props.isSignUp)
    }

    render() {
        const formElementsArr = [];
        for (let key in this.state.controls) {
            formElementsArr.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArr.map(formElement => {
            let errorMessage = null
            if (!formElement.config.valid && formElement.config.touched && formElement.id === 'userName') {
                errorMessage = 'Username must be at least 4 characters long and contain only letters and numbers '
            }
            if (!formElement.config.valid && formElement.config.touched && formElement.id === 'password') {
                errorMessage = 'Password must be at least 6 characters long'
            }

            return (
                <Fragment key={formElement.id}>
                    <Input
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        shouldValidate={formElement.config.validation}
                        invalid={!formElement.config.valid}
                    />
                    <p className='auth__error-message'>{errorMessage}</p>
                </Fragment>
            )
        })


        return (
            <div>
                <h4 className='auth__welcome'>{this.props.isSignUp ? 'Welcome to our app!' : 'Welcome back!'}</h4>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <p className='auth__error-message auth__error-message--capitalize'>{this.state.errorMessage}</p>
                    <AuthBtn type='block' disabled={this.state.controls.userName.valid && this.state.controls.password.valid ? false : true}>Submit</AuthBtn>
                </form>
                <p className='toSignIn'>{this.props.isSignUp ? 'Already have an account?' : `Don't have an account?`}</p>
                <AuthBtn type='secondary' click={this.switchAuthModeHandler}>{this.props.isSignUp ? 'Sign in' : 'Sign up'}</AuthBtn>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignUp: state.auth.isSignUp,
        errorMessage: state.auth.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (userName, password, isSignUp) => dispatch(actions.auth(userName, password, isSignUp)),
        onAuthSwitchMode: (isSignUp) => dispatch(actions.switchAuthMode(isSignUp)).errorMessage
    }
}

Auth.propTypes = {
    isSignUp: PropTypes.bool,
    errorMessage: PropTypes.string,
    token: PropTypes.string,
    onAuth: PropTypes.func,
    onAuthSwitchMode: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)