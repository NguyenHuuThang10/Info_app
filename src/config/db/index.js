const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect("mongodb+srv://root:123@cluster0.watqp3z.mongodb.net/Info_app?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connect Successfully")
    } catch (error) {
       console.log("Connect Fail") 
    }
}

module.exports = { connect }