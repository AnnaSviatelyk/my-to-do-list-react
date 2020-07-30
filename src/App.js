import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList'
import Main from './containers/Main/Main'
import Logout from './containers/Auth/Logout/Logout'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {

    let routes = (<Switch>
      <Route path='/' exact component={Main} />
      <Redirect to='/' />
    </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/to-do-list' component={ToDoList} />
          <Route path='/logout' component={Logout} />
          <Redirect to='/to-do-list' />
        </Switch>
      )
    }

    return (
      <div className="App" >
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
