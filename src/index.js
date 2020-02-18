import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './AppReducer';

import './index.css';
import App from './App';

const reducers = combineReducers({
  field: AppReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App initialValue="Teste" />
  </Provider>,
  document.getElementById('root')
);
