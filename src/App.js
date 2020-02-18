import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <input onChange={this.handleChange} value={this.props.value} />
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

export default connect(mapStateToProps)(App);
