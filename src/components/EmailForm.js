import React, { Component } from 'react'
import './EmailForm.css'
// input box for email address with alert
export class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password:''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log({email: event.target.value});
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    alert('an email address was submitted: ' + this.state.email);
    alert('a password was submitted: ' + this.state.password);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className="email-label">Email:</span>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
        <span className="password-label">Password:</span>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <input className="submit-login-btn btn btn-success"type="submit" value="Submit" />
      </form>
    );
  }
}
export default EmailForm