import React, { Component } from 'react'
import {RentalList} from './RentalList'
import { connect } from 'react-redux'
import *  as action from '../../../actions'

class RentalSearchListing extends Component {
   state={
      searchedCity :''
    };
    componentWillMount(){
     const  searchedCity = this.props.match.params.city
    this.setState({ searchedCity})
        //this.props.dispatch(action.fecthRentals())
      }

  render() {
    return (
        <div>
          <section id='rentalListing'>
            <h1 className='page-title'>Homes Avalilable in {this.state.searchedCity}</h1>
                    <RentalList rentals ={[]}/>   
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

 export default  connect(mapStateToProps)(RentalSearchListing)

