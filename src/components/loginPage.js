import React, { Component } from 'react';
import EmailForm from './EmailForm.js';
//component for log in page with settings button and email/password form & employee/customer dropdown
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
