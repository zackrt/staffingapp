import React, { Component } from 'react';
import EmailForm from './EmailForm.js';
import PasswordForm from './PasswordForm.js';
import { Link } from 'react-router-dom';
import './loginPage.css';
//component for log in page with settings button and email/password form & employee/customer dropdown
export class loginPage extends Component {
  render() {
    return (
      <div>
        <h1 className="login-page-title">Login</h1>
        <Link className="settings-link btn btn-primary" role="button" to="/settingsPage">Settings</Link>
        <EmailForm/>
        <PasswordForm/>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select One
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="employee-dropdown-btn dropdown-item" to="./employeePage">Employee</Link>
    <Link class="customer-dropdown-btn dropdown-item" to="./customerPage">Customer</Link>
  </div>
</div>
      </div>
    )
  }
}

export default loginPage
