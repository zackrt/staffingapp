import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './createaccountPage.css'
export class createaccountPage extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <br>
        </br>
        <div className="create-account-content">
          <div className="input-group mb-3">
            <div className="input input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Full Name</span>
            </div>
            <input type="text" className="form-control" placeholder="James Smith" aria-label="Full name" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Email Address</span>
            </div>
            <input type="text" className="form-control" placeholder="Jsmith@gmail.com" aria-label="email address" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password" className="form-control" placeholder="******" aria-label="password" aria-describedby="basic-addon1"/>
          </div>

        <Link className="continue-btn btn btn-success" role="button" to="/employeePage">Continue</Link>
        <Link className="back-btn btn btn-danger" role="button" to="/">Back</Link>
        </div>
      </div>
    );
  }
}
export default createaccountPage