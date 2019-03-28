const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const bcrypt =  require('bcrypt')

const userSchema = new Schema({
    username :{
        type:String, 
        min:[4, 'To short  min is 4 charaters' ], 
        max:[32,'Too long max is 32 charaters']
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

userSchema.methods.hasSamePassword =  function(passwordRequest) {
    return bcrypt.compareSync(passwordRequest, this.password)
}

userSchema.pre("save" , function (next) {


    const user = this;

    bcrypt.genSalt(11, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash
            next()
        });
    });
})

module.exports = mongoose.model("User",userSchema)