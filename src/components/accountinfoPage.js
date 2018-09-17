import React, { Component } from 'react';
// component for the account info page
export class accountinfoPage extends Component {
  render() {
    return (
      <div>
        <h1>Account Info </h1>
        <h2 className="fullname">Full Name</h2>
        <input className="fullname-text-input" type="text"placeholder="James Bond"></input>
        <h3>Email</h3>
        <h3>Password</h3>
        <h4>Employee ID/Customer ID</h4>
        <h4>Type: Employee/Customer</h4>
      </div>
    )
  }
}

export default accountinfoPage
