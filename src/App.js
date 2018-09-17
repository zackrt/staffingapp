import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//component for the app 
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
        <img src="./aaaicon.png" alt="aaa icon"></img>
      </div>    
    );
  }
}

export default App;