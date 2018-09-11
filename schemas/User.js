const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
    username: String,
    password: String,
    firstName: String,
    lastName: String
    //quote: {type: String, default: "you have no quote"}
    
})
const User = mongoose.model('user7', UserSchema)

module.exports = User