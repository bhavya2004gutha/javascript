const mongoose = require('mongoose')
const employeeSchema = newmongoose.Schema({
    // name,email,phone,city
    name:{
        type: String,
        reuired:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    city:{
        type:String,
        default:false
    },



})

module.export = mongoose.model('Employee',employeeSchema)