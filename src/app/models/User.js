const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema ({
    msv: {type: String},
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    address: {type: String}
},{
    conllection: 'users'
})

module.exports = mongoose.model("User", User)