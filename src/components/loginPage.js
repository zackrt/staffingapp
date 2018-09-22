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
        <div className="settingslink-content">
          <Link className="settings-link btn btn-primary" role="button" to="/settingsPage">Settings</Link>
        </div>
        <div className="login-form-content">
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
  <button type="button" className="forgotpassword-btn btn btn-primary" data-toggle="modal" data-target="#forgotpasswordModal">
  Forgot Password?
  </button>

<div className="modal fade" id="forgotpasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="forgotpasswordModalLabel">Reset Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        New Password <input placeholder="new password"/>
        <br></br>
        <br></br>
        Re-type New Password <input placeholder="re-type new password"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
      </div>
    )
  }
}

export default loginPage
