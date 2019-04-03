const express = require("express");
const Rental = require("../models/rental")
const router = express.Router();

router.get("", function(req,res){
  Rental.find({})
  .select("-bookings")
  .exec((err,FoundRental)=>{
         res.json(FoundRental)
    })
})


router.get("/:id", function(req,res){
    var rentalid = req.params.id;
    Rental.findById(rentalid)
    .populate("user", 'username -_id')
    .populate('bookings','startAt endAt -_id')
    .exec((err, Rentalid)=>{
      if (err) {
         res.status(422).send({errors :[{title:"Rental error", detail : "could not find rental"}]})   
       }
       res.json(Rentalid)
     })
})

module.exports = router