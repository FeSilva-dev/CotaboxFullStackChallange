const mongoose = require('mongoose')

let ownerSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    percentual: Number,
    id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Owner', ownerSchema)