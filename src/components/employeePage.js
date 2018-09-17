import React, { Component } from 'react'
//component for employee page
export class employeePage extends Component {
  render() {
    return (
      <div>
        <h1 className="employee-page-title">Employee</h1>
        <button className="available-btn btn">Available</button>
        <button className="not-available-btn btn">Not Available</button>
        <button className="arrived-btn btn">Arrived</button>
        <button className="departed-btn btn">Departed</button>
        <button className="schedule-btn btn">Schedule</button>
      </div>
    )
  }
}

export default employeePage
