import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import indexReducer from "reducer/index";
import indexSaga from "saga/index";

import "style/css/index.css";
import { ConnectedRouter } from 'connected-react-router';

import Socket from "socket";
import { BASE_URL } from 'middleware/api';
import io from "socket.io-client";

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(
  indexReducer(history),
  applyMiddleware(
    routerMiddleware(history), 
    sagaMiddleware
  )
);

sagaMiddleware.run(indexSaga);

const socket = io.connect(BASE_URL);
socket.on("seq-num", (msg) => console.info(msg));

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();