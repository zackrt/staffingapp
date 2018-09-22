import React, { Component } from 'react'
import './achinfoPage.css'
// component for ach banking info page
export class achinfoPage extends Component {
  render() {
    return (
      <div className="achinfo_content">
        <h1>ACH Info</h1>
        <h2 className="bankrouting-title">Bank Routing #</h2>
        <input type="number" className="bankrouting_input" placeholder="023456789" readOnly/>
        <h2 className="account-title">Account #</h2>
        <input type="number"className="bankaccount_input" placeholder="543210123" readOnly/>
        <br></br>
        <button className="achinfo-save-btn btn btn-success">Save</button>
      </div>
    )
  }
}

export default achinfoPage
