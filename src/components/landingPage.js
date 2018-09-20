import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './landingPage.css';
// Home Page or Landing Page component
export class landingPage extends Component {
  render() {
    return (
      <div>
        <h1 className="loading-title">Loading</h1>
        <div class="landing-page-btn-group btn-group-vertical">
        <Link className="login-link-btn btn btn-primary" role="button"to="/loginPage">Login</Link>
        <br></br>
        <Link className="employee-link-btn btn btn-primary" role="button"to="/employeePage">Employees</Link>
        <br></br>
        <Link className="create-link-btn btn btn-primary" role="button"to="/createaccountPage">Create Account</Link>
        </div>
      </div>
    )
  }
}
export default landingPage