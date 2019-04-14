const express = require('express');
const mongoose = require('mongoose')
const config = require("./config/dev")
const bodyParser  = require('body-parser');
const FakeDB = require("./fake-db")
const RentalRoute = require("./routes/rentals")
const UserRoute = require("./routes/users")
const BookingRoute = require('./routes/booking')

mongoose.connect(config.DB_URL).then(()=>{
    const fakedb = new FakeDB();
  //  fakedb.seedDb()
})
 
const app = express();

 app.use(function  (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
})
app.use(bodyParser.json())

app.use("/api/v1/users", UserRoute)
app.use("/api/v1/rentals", RentalRoute)
app.use("/api/v1/booking",BookingRoute)


var PORT = process.env.PORT || 3001

app.listen(PORT,function(){
    console.log("am runin on"+PORT)
})

