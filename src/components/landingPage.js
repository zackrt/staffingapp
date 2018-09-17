import React, { Component } from 'react'
// Home Page or Landing Page component
export class landingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the AAA Apartment staffing landing page!</h1>
        <h1><Link to="/loginPage">Login</Link></h1>
        <img src="./aaaicon.png" alt="aaalogo"/>
      </div>
    )
  }
}
export default landingPage