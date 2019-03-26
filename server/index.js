const express = require('express');
const mongoose = require('mongoose')
const config = require("./config/dev")
const app = express();
const Rental = require("./models/rental")
const FakeDB = require("./fake-db")

mongoose.connect(config.DB_URL).then(()=>{
    const fakedb = new FakeDB();
    fakedb.seedDb()
}
)

var PORT = process.env.PORT || 3001

app.get("/test",(req,res)=>{
   res.json({"test":"true"})
})

app.listen(PORT,function(){
    console.log("am runin on"+PORT)
})

