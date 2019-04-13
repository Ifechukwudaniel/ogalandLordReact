import React, { Component } from 'react'
import {RentalList} from './RentalList'
import { connect } from 'react-redux'
import *  as action from '../../../actions'
import { ToastContainer,toast } from 'react-toastify';

class RentalSearchListing extends Component {
    state={
      City :''
   };

    componentWillMount(){
      this.searchCity();
    }
    componentDidUpdate (prevProps){
      debugger;
      const PrensentCity = this.props.match.params.city;
      const PreviousCity = prevProps.match.params.city;
      if (PrensentCity !== PreviousCity ) {
          this.searchCity();
      }
     
    }


    searchCity = ()=>{
      const  searchedCity = this.props.match.params.city
      this.setState({ City:searchedCity})
      this.props.dispatch(action.fecthRentals(searchedCity))
    }

    errorToast=()=> {
      toast.error(`there is no place in ${this.state.City} `,{position:"top-center"})
    }


    SearchRender= ()=>{
      const {error,data} = this.props.rentals

      if (error.length ===0) {
        return(
          <div>
          <section id='rentalListing'>
              <h1 className='page-title' >houses in {this.state.City}</h1>
              <RentalList  rentals= {data}/>
          </section>
          </div>
        ) 
      } 

      else{
      return(
        <div className="alert alert-danger">
          <ToastContainer />
            <h1 className='page-title' >{error[0].detail}</h1>
            {   this.errorToast()}
        </div>
      )

      }
    }  

  render() {
    return (
          <div>
            {this.SearchRender()}
          </div>
    )
  }
}


function mapStateToProps(state){
    return{
    rentals :state.rentals,
    }
  }

 export default  connect(mapStateToProps)(RentalSearchListing)

