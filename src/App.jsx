import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Switch, withRouter, Route } from "react-router-dom";

import withSome from "./hoc/withSome"
import * as actions from "./store/actions";

import './App.scss';
import logo from './logo.svg';
import sfbLogo from './sfb_logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="author">
            <img src={sfbLogo} className="author-logo" alt="logo" />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            let's begin
          </p>
        </header>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withSome,
  connect(
    state => ({}),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
  )
)(App)
