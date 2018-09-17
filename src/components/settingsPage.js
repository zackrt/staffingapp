import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// component for the settings page with 3 links or buttons
export class settingsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="SettingsPageTitle">Settings</h1>
        <Link className="account-info-link" to="/accountinfoPage">Account Info</Link>
        <Link className="notifications-link" to="/notificationsPage">Notifications</Link>
        <Link className="ach-info-link"to="/achinfoPage">ACH Info</Link>
      </div>
    )
  }
}
export default settingsPage