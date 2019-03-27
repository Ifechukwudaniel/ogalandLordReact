
exports.register  = function (req, res) {
   const username = req.body.username
   const email = req.body.email
   const password = req.body.password
   const passwordConfirm = req.body.passwordConfirm
   
   res.json({"username": username, "email": email })
}


exports.auth = function (req, res) {
    
}