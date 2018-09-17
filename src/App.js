import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AAA Apartment Staffing App!</h1>
        </header>
        <p className="App-intro">
          AAA Apartment Staffing react mobile app
        </p>
      </div>
    );
  }
}

export default App;
