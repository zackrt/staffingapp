import React, { Component } from 'react';
import EmailForm from './EmailForm.js';
export class loginPage extends Component {
  render() {
    return (
      <div>
        <h1 className="login-page-title">Login</h1>

        <button className="settingsbtn">Settings</button>
        <EmailForm/>
      </div>
    )
  }
}

export default loginPage
