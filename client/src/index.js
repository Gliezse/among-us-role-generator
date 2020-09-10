import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'

import indexReducer from "reducer/index";
import indexSaga from "saga/index";
import { Router, BrowserRouter } from 'react-router-dom';

import "style/css/index.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(indexSaga);

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();