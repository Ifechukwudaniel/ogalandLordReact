import React, {Component} from 'react';
import {connect} from "react-redux";
import *  as action from '../../../actions/index'
class RentalDetail extends Component {
componentDidMount(){
   const id =this.props.match.params.id;
   this.props.dispatch(action.fetchRentalById(id))
}
  render(){
    const rental = this.props.rental;
    if (rental.id) {
      return (
        <div>
           <h1> {rental.title}</h1>
           <h1> {rental.dailyRate}</h1>
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