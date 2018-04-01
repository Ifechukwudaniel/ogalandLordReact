const express = require("express");
const Rental = require("../models/rental")
const router = express.Router();
const {normalizeError} = require("../helpers/mongoose")

router.get("", function(req,res){
  const {city} = req.query
  if (city) {
      Rental.find({city : city.toLowerCase()})
      .select("-booking")
      .exec((err, fillterdRental)=>{
          if (err) {
              return   res.status(422).send({errors :normalizeError(err.errors) })   
          }
          if (fillterdRental.length === 0 ) {
            return   res.status(422).send({errors :[{title:"Rental error", detail : `Could not find a rental for city ${city}`}]})   
          } 
          return  res.json(fillterdRental)
      })
  } else {
    Rental.find({})
    .select("-bookings")
    .exec((err,FoundRental)=>{
         return    res.json(FoundRental)
    }) 
  }
})


router.get("/:id", function(req,res){
    var rentalid = req.params.id;
    Rental.findById(rentalid)
    .populate("user", 'username -_id')
    .populate('bookings','startAt endAt -_id')
    .exec((err, Rentalid)=>{
      if (err) {
        return  res.status(422).send({errors :[{title:"Rental error", detail : "could not find rental"}]})   
       }
      return  res.json(Rentalid)
     })
})

module.exports = router