const express = require("express");
const router = express.Router();
const {findRentals,findRentalByid,createRental} =require('../controllers/rental')
const {authMiddleware}= require('../controllers/users')

router.get("", findRentals)

router.get("/:id", findRentalByid)

router.post("", authMiddleware, createRental)

module.exports = router