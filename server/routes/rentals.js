const express = require("express");
const router = express.Router();
const {findRentals,findRentalByid} =require('../controllers/rental')

router.get("", findRentals)

router.get("/:id", findRentalByid)


module.exports = router