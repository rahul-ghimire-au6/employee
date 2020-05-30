const mongoose = require("mongoose");
//------------------------defining models
const Schema = mongoose.Schema;
 
const company = new Schema({
  company_name:{type:String,trim:true},
  company_type:{type:String,trim:true},
  address:{type:String,trim:true},
  email:{type:String,trim:true},  
  created_by_id:{type:String,trim:true},
  created_by:{type:String,trim:true},
},{timestamps:true});

var yahoo159 = mongoose.model("company",company);
module.exports = yahoo159;
