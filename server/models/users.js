const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username :{
        type:String, 
        min:[4, 'To short  min is 4 charaters' ], 
        max:[32,'Too long max is 32 charaters'],
        required:"Username is Required"
    },
    email :{
        type:String,  
        min:[4,'To short min is 4 charaters'], 
        max:[32,'To long max is 32 charaters'],
        lowercase:true,
        unique:true,
        required:"Email is Required",
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password :{
        type:String,
        min:[4,'To short min is 4 charaters'], 
        max:[32,'To long max is 32 charaters'],
        required:"Password is Required"
     },
    rentals : [{type:Schema.Types.ObjectId, ref: 'Rental'}]
})

module.exports = mongoose.model("User",userSchema)