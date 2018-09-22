import React, { Component } from 'react';
import './notificationsPage.css';
export class notificationsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="notificationspage-title">Notifications</h1>
        <div className="notificationspage-content">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <div className="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </div>
        </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder="When Jobs are Available" readOnly/>
        </div>
          <br>
          </br>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" />
              </div>
            </div>
              <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder="Messages from Recruiters" readOnly/>
          </div>
          </div>
      </div>
    )
  }
}

export default notificationsPage
