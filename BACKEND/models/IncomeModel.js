const mongoose = require('mongoose')


const IncomeSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    trim:true,
  }
})