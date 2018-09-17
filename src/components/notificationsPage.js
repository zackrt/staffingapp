import React, { Component } from 'react';
import './notificationsPage.css';
export class notificationsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="notificationspage-title">Notifications</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <div class="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>
      </div>
          <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="When Jobs are Available"/>
      </div>
          <br>
          </br>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <div class="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>
      </div>
          <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Messages from Recruiters"/>
      </div>
      </div>
    )
  }
}

export default notificationsPage
