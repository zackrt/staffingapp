import React, { Component } from 'react';
import './accountinfoPage.css';
// component for the account info page
export class accountinfoPage extends Component {
  render() {
    return (
      <div className="accountinfopage_content">
        <h1>Account Info </h1>
        <h2 className="fullname">Full Name</h2>
        <input className="fullname-text-input" type="text"placeholder="James Bond"></input>
        <h3>Edit Email</h3>
        <input className="edit-email-input" type="text" placeholder="email address"/>
        <h3>Change Password</h3>
        <input className="edit-password-input" type="password" placeholder="new password"/>
        <h4>Employee ID/Customer ID</h4>
        <h4>Type: Employee/Customer</h4>
      </div>
    )
  }
}

export default accountinfoPage
