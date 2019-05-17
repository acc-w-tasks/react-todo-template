import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Switch, withRouter, Route } from "react-router-dom";

import * as actions from "./store/actions";

import PageComponent from './router'

import './App.scss';

class App extends Component {
  render() {
    return <PageComponent />
  }
}

export default compose(
  withRouter,
  connect(
    state => ({}),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
  )
)(App)
