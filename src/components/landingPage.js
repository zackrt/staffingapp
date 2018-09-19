import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Home Page or Landing Page component
export class landingPage extends Component {
  render() {
    return (
      <div>
        <h1>Loading</h1>
        <h1><Link className="btn btn-primary" role="button"to="/loginPage">Login</Link></h1>
        <br></br>
        <Link className="btn btn-primary" role="button"to="/employeePage">Employees</Link>
        <br></br>
        <Link className="btn btn-primary" role="button"to="/createaccount">Create Account</Link>
      </div>
    )
  }
}
export default landingPage