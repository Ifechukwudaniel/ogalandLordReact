const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username :{type:String, min:[4, 'To short for an email string' ], max:[32,'Too long for a username'],required :true,},
    email :{type:String,  min:[4,'To short for an email string'],   max:[32,'To short for an email string'],lowercase:true,
    unique:true,match:"/^\w+([\.-]?\w+)*@\w+([\.-]?\w+) "}
})