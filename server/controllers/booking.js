const Booking = require('../models/bookings');
const Rental = require('../models/rental')
const {normalizeError} = require('../helpers/mongoose')
const moment = require('moment');
const User = require('../models/users')

exports.createBooking = function (req,res) {
    const { startAt , endAt , totalPrice, quests ,days, rental} = req.body
    const user = res.locals.user;
    const booking = new Booking({startAt,endAt,totalPrice,quests,days,rental})

    Rental.findById(rental._id)
      .populate('bookings')
      .populate('user')
      .exec(function (err, foundrental) {
        if (err) {
          return    res.status(422).send(normalizeError(err.errors))
        }

        if (foundrental.user.id === user.id) {
            return  res.status(422).send({error:[{title:"Invalid  user",detail: "you can not create a booking on  a rental you own"}]})  
        }
       
        if (isValidBooking(booking,foundrental)) {
          booking.user = user;
          booking.rental= foundrental
          foundrental.bookings.push(booking);
          booking.save(function (err) {
              if (err) {
                return    res.status(422).send(normalizeError(err.errors)) 
              }

              foundrental.save();

              User.update({_id :user.id },{ $push:{ bookings : booking }})


              return    res.json({startAt : booking.startAt , endAt : booking.endAt})

          })

        } else {
          return  res.status(422).send({error:[{title:"Invalid Booking",detail: "Choosing date  is already taken"}]}) 
        }

      })
    
}

function isValidBooking(proposedBooking, rental) {
  let isValid = true;
   if (rental.bookings && rental.bookings.length >0) {
    isValid = rental.bookings.every((booking)=>{
       const proposedstart = moment(proposedBooking.startAt);
       const proposedend = moment(proposedBooking.endAt);
      
       const actualstart = moment(booking.startAt);
       const actualend = moment(booking.endAt);
         
     if ((actualstart <  proposedstart && actualend < proposedstart )|| (proposedend < actualend && proposedend < actualstart) ) {
        return true;
     } else {
        return false;
     }

     }) 
   }
  
  return isValid; 
}