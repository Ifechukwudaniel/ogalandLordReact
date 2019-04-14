import React, { Component } from 'react'
import RentalCreateForm from '../rental-create/RentalCreateForm'
import *  as actions from '../../../actions/index';
class RentalCreate extends Component {
    createRental =(rentalData)=>{
      actions.createRental(rentalData);
    }

    options={
      RenatlOption :['apartment','house','condo']
    }

  render() {
    return (
        <section id='newRental'>
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1 className='page-title'>Create Rental</h1>
              <RentalCreateForm  Submit={this.createRental} errors ={[]} options={this.options.RenatlOption}/>
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>
                <h2 className='catchphrase'>Hundreds of awesome places in reach of few clicks.</h2>
                <img src={process.env.PUBLIC_URL + '/img/create-rental.jpg'} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}

export default RentalCreate
