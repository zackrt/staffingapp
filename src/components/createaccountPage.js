import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class createaccountPage extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <br>
        </br>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Full Name</span>
            </div>
            <input type="text" class="form-control" placeholder="James Bond" aria-label="Full name" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email Address</span>
            </div>
            <input type="text" class="form-control" placeholder="JBond@gmail.com" aria-label="email address" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password" class="form-control" placeholder="******" aria-label="password" aria-describedby="basic-addon1"/>
          </div>

        <Link className="continue-btn btn btn-success" role="button" to="/employeePage">Continue</Link>
        <Link className="back-btn btn btn-danger" role="button" to="/">Back</Link>
      </div>
    );
  }
}
export default createaccountPage