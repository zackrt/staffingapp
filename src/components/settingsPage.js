import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// component for the settings page with 3 links or buttons
export class settingsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="SettingsPageTitle">Settings</h1>
        <Link className="account-info-link btn btn-primary" role="button" to="/accountinfoPage">Account Info</Link>
        <br></br>
        <Link className="notifications-link btn btn-info" role="button" to="/notificationsPage">Notifications</Link>
        <br></br>
        <Link className="ach-info-link btn btn-dark" role="button" to="/achinfoPage">ACH Info</Link>
      </div>
    )
  }
}
export default settingsPage