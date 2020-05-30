const mongoose = require("mongoose");
//------------------------defining models
const Schema = mongoose.Schema;
 
const employee = new Schema({
  name: {type:String,required:true,trim:true},
  email: {type:String, required:true},
  past_company:{type:String},
  past_joining_date:{type:String},
  past_resignation_date:{type:String},
  current_company: {type:String},
  current_joining_date:{type:String},
  password: {type:String, required:true},
},{timestamps:true});

const yahoo = mongoose.model("Employee",employee);

module.exports = yahoo;
