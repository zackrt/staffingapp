import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class createaccountPage extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <Link className="continue-btn btn btn-primary" role="button">Continue</Link>
        <Link className="back-btn btn btn-primary" role="button">Back</Link>
      </div>
    )
  }
}
export default createaccountPage