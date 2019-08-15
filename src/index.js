import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from "history";

import App from './App.jsx';
import store from "./store";

import './index.scss';
import 'semantic-ui-css/semantic.min.css'


Axios.defaults.baseURL = 'https://test.megapolis-it.ru/api';

export const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
