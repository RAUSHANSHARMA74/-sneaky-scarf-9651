

const mongoose = require("mongoose")

const womensSchema = mongoose.Schema({
    title : String,
    brand : String,
    image : String,
    color : String,
    price : String,
    rating : Number,
    size : String,
})

const WomensModel = mongoose.model("womensProducts", womensSchema)

module.exports = {WomensModel}