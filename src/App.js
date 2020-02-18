import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeValue } from './AppActions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <label>{this.props.value}</label>
            <br></br>
            <input onChange={this.props.changeValue} value={this.props.value} />
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
