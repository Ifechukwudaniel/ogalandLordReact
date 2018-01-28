import React from 'react';
import Auth from '../../services/auth-services';

import DateRangePicker from 'react-bootstrap-daterangepicker';
export class Booking extends React.Component {
  handleBook=()=>{
   if (!Auth.isAuthenticated()) {
     window.location.pathname = "/login"
   }
  }

  componentWillMount(){
    this.getBookingOutDate()
  }
  getBookingOutDate=()=>{
    const {booking} = this.props.rental;

    if (booking && booking.length >0) {
       booking.forEach(element => {
         
        console.log(element);
       });
    }


  }

  render() {

    const {rental} = this.props  
    return (
      <div className='booking'>
        <h3 className='booking-price'>$ {rental.dailyRate} <span className='booking-per-night'>per night</span></h3>
        <hr></hr>
        <div className='form-group'>
          <label htmlFor='guests'>Guests</label>
          <DateRangePicker opens="left" containerStyles={{display:'block'}}>
            <input type='text' className='form-control' id='dates' placeholder=''></input>
         </DateRangePicker>
        </div>
        <div className='form-group'>
          <label htmlFor='guests'>Guests</label>
          <input type='number' className='form-control' id='guests' aria-describedby='emailHelp' placeholder=''></input>
        </div>
        <button className='btn btn-bwm btn-confirm btn-block' onClick ={this.handleBook} >Reserve place now</button>
        <hr></hr>
        <p className='booking-note-title'>People are interested into this house</p>
        <p className='booking-note-text'>
          More than 500 people checked this rental in last month.
        </p>
      </div>
    )
  }
}
