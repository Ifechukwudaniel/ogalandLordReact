import React, {Component} from 'react';
import {RentalList} from "./RentalList";
import {connect} from "react-redux";
import * as action from '../../../actions';

class RentalListing extends Component {
  componentWillMount(){
    this.props.dispatch(action.fecthRentals())
  }
  render(){
    return (
      <div>
        <section id='rentalListing'>
          <h1 className='page-title'>Your Home All Around the World</h1>
                 <RentalList rentals ={this.props.rentals}/>    
        </section>
     </div>
    )
  }
}


function mapStateToProps(state){
    return{
    rentals :state.rentals.data
    }
  }

 export default  connect(mapStateToProps)(RentalListing)
