import React, { Component } from 'react'
// component for ach banking info page
export class achinfoPage extends Component {
  render() {
    return (
      <div>
        <h1>ACH Info</h1>
        <h2 className="bankrouting-title">Bank Routing #</h2>
        <input type="number"></input>
        <h2 className="account-title">Account #</h2>
        <input type="number"></input>
      </div>
    )
  }
}

export default achinfoPage
