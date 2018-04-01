const express = require("express");
const router = express.Router();
const {findRentals,findRentalByid,createRental} =require('../controllers/rental')

router.get("", findRentals)

router.get("/:id", findRentalByid)

router.post("", createRental)

module.exports = router