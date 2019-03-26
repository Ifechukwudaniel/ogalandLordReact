const express = require('express');
const mongoose = require('mongoose')
const config = require("./config/dev")
const FakeDB = require("./fake-db")
const Rentalroute = require("./routes/rentals")

mongoose.connect(config.DB_URL).then(()=>{
    const fakedb = new FakeDB();
    fakedb.seedDb()
})
 
const app = express();

app.use("/api/v1/rentals",Rentalroute)

var PORT = process.env.PORT || 3001

app.listen(PORT,function(){
    console.log("am runin on"+PORT)
})

