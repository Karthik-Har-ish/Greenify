const mongoose = require("mongoose")




const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    phoneNumber: String,
    points:{type:Number,default:0},
    dayStreak:{type:Number,default:0},
    userType:{type:String,enum:['admin','user'],default:'user'}
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel