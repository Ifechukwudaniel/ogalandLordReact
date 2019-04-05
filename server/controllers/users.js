
const User = require('../models/users')
const {normalizeError} = require('../helpers/mongoose')
const jwt = require('jsonwebtoken');
const config = require('../config/dev')
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
        return  res.status(422).send({error :[{title :"Data missing ",detail:"Provide email and password"}]})
    }

    User.findOne({email},function (err, user) {
       if (err) {
        return  res.status(422).send(normalizeError(err.errors))
       }

       if(!user){
        return res.status(422).send({error :[{title :"Invalid User",detail:"Please this user Does not exist"}]})
       }

       if (user.hasSamePassword(password)) {
        const token  =   jwt.sign({
            userId :user.id,
            username :user.username
            }, config.SECRET_KEY, { expiresIn: '1h' });

           return res.json(token)
       }
       else{
        return res.status(422).send({error :[{title :"Wrong Data",detail:"Wrong Username or Password "}]})
       }
    })
}

exports.authMiddleware = function (req,res,next) {
   const token = req.headers.authorization
   if (token) {
      const user = parseToken(token)

      User.findById(user.userId , function (err, user) {
        if(err){
         return  res.status(422).send(normalizeError(err.errors))
        }
        if (user) {
           res.locals.user = user
          next()
        } else {
          return  notAuthorized(res)
        }
      })
   }
   else{
    return  notAuthorized(res)
   }

}

function parseToken(token) {
 return jwt.verify(token.split(' ')[1],config.SECRET_KEY)
}

function notAuthorized(res) {
  res.status(401).send({error :[{title :"Not authorized",detail:"You need to login "}]})
}