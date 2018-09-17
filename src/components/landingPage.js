import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Home Page or Landing Page component
export class landingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the AAA Apartment staffing landing page!</h1>
        <h1><Link className="btn btn-primary" role="button"to="/loginPage">Login</Link></h1>
        <img src="./aaaicon.png" alt="aaalogo"/>
        <br></br>
        <Link className="btn btn-primary" role="button"to="/employeePage">employees</Link>
      </div>
    )
  }
}
export default landingPage