import React, { Component } from 'react'

export class settingsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="SettingsPageTitle">Settings</h1>
        <button className="account-btn btn">Account Info</button>
        <button className="notifications-btn btn">Notifications</button>
        <button className="ach-btn btn">ACH Info</button>
      </div>
    )
  }
}

export default settingsPage
