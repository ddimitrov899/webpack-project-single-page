import React, { Component } from 'react';
import './../styles/booking.component.scss'
import booking from './../../../public/assets/images/booking.jpg';
class BookingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
    }
  }
  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Booking</h1>
          <div className="booking">
            <img src={booking} className="booking-img" />
          </div>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input type="text" id="name" name="name" className="autocomplete" />
                <label htmlFor="name"><i className="material-icons tiny">account_box</i>  Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="lastName" name="lastName" className="autocomplete" />
                <label htmlFor="lastName"><i className="material-icons tiny">account_box</i>  Last Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="phone" name="phone" className="autocomplete" />
                <label htmlFor="phone"><i className="material-icons tiny">smartphone</i>  Phone</label>
              </div>
              <div className="input-field col s6">
                <input type="email" id="email" name="email" className="autocomplete" />
                <label htmlFor="email"><i className="material-icons tiny">email</i>  Email</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="date" name="date" className="autocomplete" />
                <label htmlFor="date"><i className="material-icons tiny">date_range</i>  Date</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="time" name="time" className="autocomplete" />
                <label htmlFor="time"><i className="material-icons tiny">access_time</i>  Time</label>
              </div>
              <div className="input-field col s12">
                <textarea id="description" name="description" className="materialize-textarea" data-length="120" />
                <label htmlFor="description"><i className="material-icons tiny">description</i>  Description</label>
              </div>
            </div>
            <a className="waves-effect waves-light btn">Book</a>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingComponent;