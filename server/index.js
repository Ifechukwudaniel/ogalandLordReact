const express = require('express');
const mongoose = require('mongoose')
const config = require("./config/dev")
const bodyParser  = require('body-parser');
const FakeDB = require("./fake-db")
const RentalRoute = require("./routes/rentals")
const UserRoute = require("./routes/users")

mongoose.connect(config.DB_URL).then(()=>{
    const fakedb = new FakeDB();
    //fakedb.seedDb()
})
 
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.use("/api/v1/users", UserRoute)
app.use("/api/v1/rentals",RentalRoute)


var PORT = process.env.PORT || 3001

app.listen(PORT,function(){
    console.log("am runin on"+PORT)
})

