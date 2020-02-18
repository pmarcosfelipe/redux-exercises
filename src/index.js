import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const reducers = combineReducers({
  field: () => ({ value: 'opa' })
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App initialValue="Teste" />
  </Provider>,
  document.getElementById('root')
);
