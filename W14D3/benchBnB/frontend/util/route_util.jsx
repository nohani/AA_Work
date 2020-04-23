import { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path = {path}
      exact = {exact}
      render={ props => 
        !currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id)};
}

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
)