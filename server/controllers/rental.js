const Rental = require("../models/rental")
const {normalizeError} = require("../helpers/mongoose")

 exports.findRentals = function(req,res){
  const {city} = req.query
  const query =  city  ? {city : city.toLowerCase()} :  {}

    Rental.find(query)
    .select("-bookings")
    .exec((err,FoundRental)=>{
      if (err) {
        return   res.status(422).send({errors :normalizeError(err.errors) })   
      }
      if ( city && FoundRental.length === 0 ) {
        return   res.status(422).send({errors :[{title:"Rental error", detail : `Could not find a rental for city ${city}`}]})   
      } 
        return    res.json(FoundRental)
    }) 

 }

exports.findRentalByid = function(req,res){
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
    }

    exports.createRental = function (req,res) {
        const  {title} = req.body

        return res.json({title})
    }