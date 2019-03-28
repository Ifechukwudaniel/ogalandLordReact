
const User = require('../models/users')
const {normalizeError} = require('../helpers/mongoose')

exports.register  = function (req, res) {
    const {username,email,password, passwordConfirm} = req.body

        if (!email|| !password) {
             return  res.status(422).send({error:[{title:"Data missing  ",detail: " provide email and password"}]})  
        }
        if (password !== passwordConfirm ) {
            return res.status(422).send({error:[{title:"Invalid password",detail: "Password and password confirmation do not match"}]})  
        }

     
      User.findOne({email},function (err, existingUser) {
            
        if (err) {
          return  res.status(422).send( normalizeError(err.errors))   
        }
      
        if ( existingUser ) {
          return  res.status(422).send({error:[{title:"Invalid email",detail: "please a user with email  already exist"}]})    
        }

        const user = new User({
            username,
            email,
            password
        })

        user.save(function (err) {
             if (err) {
              return   res.status(422).send(normalizeError(err.errors))
             }
             
           return  res.json({"registed":true})
        })

      })

}


exports.auth = function (req, res) {
    const {email, password} = req.body
    if (!email || !password) {
        return  res.status(422).send({error :[{title :"Data missing ",massage:"Provide email and password"}]})
    }

    User.findOne({email},function (err, user) {
       if (err) {
        return  res.status(422).send(normalizeError(err.errors))
       }

       if(!user){
        return res.status(422).send({error :[{title :"Invalid User",massage:"Please this user Does not exist"}]})
       }

       if (user.hasSamePassword(password)) {
           return res.json({working:true})
           //jwt
       }
       else{
        return res.status(422).send({error :[{title :"Wrong Data",massage:"Wrong Username or Password "}]})
       }
    })
}