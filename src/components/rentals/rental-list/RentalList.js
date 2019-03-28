import React, {Component} from 'react';
import { RentalCard } from "./RentalCard";

 export class RentalList extends Component {
  renderRentals(){
   return this.props.rentals.map((rental,i) => {
     return(   
       <RentalCard key ={i} rentals={rental} colNum="col-md-3 col-xs-6"/>
     )
    });
  }
  render(){
    return (
              <div className='row'>
                    {this.renderRentals()}
              </div>
    )
  }
}