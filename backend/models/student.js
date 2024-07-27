const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({

   name:{type:String,default:'hahaha'},
   age:{type:Number,min:10,max:70},
   city:{type:String},
   department:{type:String,default:'xyz'},
   
})

module.exports = mongoose.model('Student',StudentSchema);