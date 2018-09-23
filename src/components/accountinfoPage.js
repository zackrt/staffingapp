import React, { Component } from 'react'
import './accountinfoPage.css'
import { Link } from 'react-router-dom'
// component for the account info page
export class accountinfoPage extends Component {
  render() {
    return (
      <div className="accountinfopage_content">
        <h1>Account Info </h1>
        <h2 className="fullname">Full Name</h2>
        <input className="fullname-text-input" type="text"placeholder="James Smith"></input>
        <h3>Edit Email</h3>
        <input className="edit-email-input" type="text" placeholder="Email Address" readOnly/>
        <h3>Change Password</h3>
        <input className="edit-password-input" type="password" placeholder="new password" readOnly/>
        <h4>Employee ID/Customer ID</h4>
        <h4>Type: Employee/Customer</h4>
        <button className="accountinfo-save-btn btn btn-success">Save</button>
        <Link className="go-back-link btn btn-danger" role="button" to="/settingsPage">Go Back</Link>
      </div>
    )
  }
}

export default accountinfoPage
