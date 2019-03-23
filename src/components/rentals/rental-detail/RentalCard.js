import React from 'react';
import {Link} from 'react-router-dom';
 export const RentalCard = (props) => {
   const rental = props.rentals
  return (
      <div className={props.colNum}>
        <Link className='rental-detail-link' to={`/rental/${rental.id}`}>
          <div className='card bwm-card'>
              <img className='card-img-top' src={rental.image} alt={rental.title+" image"}></img>
              <div className='card-block'>
                <h6 className={`card-subtitle ${rental.category}`}>{rental.shared ? "Whole":  "Shared" } Apartment &#183; {rental.city}</h6>
                <h4 className='card-title'>{rental.title}</h4>
                <p className='card-text'>${rental.dailyRate} per Night &#183; Free Cancelation</p>
              </div>
            </div>
        </Link>
      </div>
  )
}