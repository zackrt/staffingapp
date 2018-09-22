import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './employeePage.css'
//component for employee page with 5 buttons
export class employeePage extends Component {
  render() {
    return (
      <div className="employeePage-content">
        <div className="employee-page-btn-cln btn-group-vertical">
          <h1 className="employee-page-title">Employee</h1>

<button type="button" className="available-btn btn btn-primary" data-toggle="modal" data-target="#availableModal">
  Available
</button>

<div className="modal fade" id="availableModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Job details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Send Employee ID# to work location, mm/dd/yy / time
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
          

<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#notAvailableModal">
      Not Available
</button>


<div className="modal fade" id="notAvailableModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Not Available for Job</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        N employee ID# Not Available mm/dd/yy / time
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>

<button type="button" className="arrived-btn btn btn-warning" data-toggle="modal" data-target="#arrivedModal">
  Check-In
</button>


<div className="modal fade" id="arrivedModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Arrived at Job</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        A, Employee ID# + Customer ID#, location (lat/long), date/time.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
          
<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#departedModal">
  Check-Out
</button>

<div className="modal fade" id="departedModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Employee departure</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        D, Employee ID# + Customer ID#, location (lat/long), date/time.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
          <Link className="schedule-btn btn btn-success"to="/">Schedule</Link>
        </div>
      </div>
    )
  }
}

export default employeePage