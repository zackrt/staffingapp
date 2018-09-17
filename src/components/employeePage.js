import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component for employee page with 5 buttons
export class employeePage extends Component {
  render() {
    return (
      <div>
        <div class="btn-group-vertical">
          <h1 className="employee-page-title">Employee</h1>
          <Link className="available-btn btn btn-primary" to="/"role="button">Available</Link>
          <Link className="not-available-btn btn btn-danger"to="/">Not Available</Link>
          <Link className="arrived-btn btn btn-secondary"to="/">Arrived</Link>
          <Link className="departed-btn btn btn-info"to="/">Departed</Link>
          <Link className="schedule-btn btn btn-warning"to="/">Schedule</Link>
        </div>
      </div>
    )
  }
}

export default employeePage
