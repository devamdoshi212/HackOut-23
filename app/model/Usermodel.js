const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required:true,
        toLowerCase:true,
    },
    password:{
        type:String,
        required:true
    },
    con_password:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model("Register",RegisterSchema)