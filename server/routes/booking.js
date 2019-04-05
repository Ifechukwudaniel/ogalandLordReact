const  express = require('express')
const Router = express.Router();
const  BookingController = require('../controllers/booking')
const auth = require('../controllers/users')

Router.post("",auth.authMiddleware,BookingController.createBooking)

module.exports = Router;