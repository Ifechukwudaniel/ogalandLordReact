const Rental = require("./models/rental")
const User = require('./models/users')
const Data =  require('./data.json')

class FakeDB {
    constructor() {
        this.rentals =Data.rentals
        this.users =  Data.user
    }
    async CleanDb(){
      await  User.deleteMany({})
      await   Rental.deleteMany({});
   }
   pushDataToDb(){
      const  user = new User(this.users[0])
      const user1 = new User(this.users[1])
       this.rentals.forEach((rental)=>{
         const newrental = new Rental(rental);
         newrental.user = user;
         newrental.save();
         
         user.rentals.push(newrental)
       })
       user.save();
       user1.save();
   }
 async seedDb (){
     await  this.CleanDb()
      this.pushDataToDb()
  }
    
}

module.exports = FakeDB