import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterReducer from './CounterReducer';
import Counter from './Counter';

import './index.css';

const reducers = combineReducers({
  counter: CounterReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
