import React, { Component } from 'react'
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
    this.setState({email: event.target.email});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.password});
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
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} readOnly/>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} readOnly/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EmailForm