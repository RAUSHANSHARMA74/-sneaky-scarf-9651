
const mongoose = require("mongoose")

const mensSchema = mongoose.Schema({
    title : String,
    brand : String,
    image : String,
    color : String,
    price : Number,
    rating : Number,
    size : String,
})

const MensModel = mongoose.model("mensProducts", mensSchema)

module.exports = {MensModel}