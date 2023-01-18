const mongoose = require("mongoose")

const usersSingupSchema = mongoose.Schema({
    name : String,
    email : String,
    country : String,
    address : String,
    number : Number,
    password : String,

})

const UsersSingupModel = mongoose.model("singupData", usersSingupSchema)

module.exports = {UsersSingupModel}