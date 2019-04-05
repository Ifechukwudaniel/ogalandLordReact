import React, {Component} from 'react';
import {connect} from "react-redux";
import *  as action from '../../../actions/index'
import {RentalDetailInfo} from './RentalDetailInfo';
import {RentalMap} from './RentalMap';
import {Booking} from '../../bookings/Booking'
class RentalDetail extends Component {
componentDidMount(){
   const id =this.props.match.params.id;
   this.props.dispatch(action.fetchRentalById(id))
}
  render(){
    const rental = this.props.rental;
    if (rental._id) {
      return (
        <div>
        <section id='rentalDetails'>
        <div className='upper-section'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={rental.image} alt=''></img>
            </div>
            <div className='col-md-6'>
              <RentalMap location ={rental.city+","+rental.street}/>
            </div>
          </div>
        </div>

        <div className='details-section'>
          <div className='row'>
            <div className='col-md-8'>
                <RentalDetailInfo rental= {rental}/>
             </div>
            <div className='col-md-4'>
            <Booking rental={rental} />
            </div>
          </div>
        </div>
      </section>
        </div>
      )
      
    } else {
      return(
         <h1> Loading .......</h1>
      )
    }
  }
}

function mapStateToProps(state){
  return {
     rental : state.rental.data
  }
}

export default connect(mapStateToProps)(RentalDetail)