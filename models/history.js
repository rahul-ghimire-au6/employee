const mongoose = require("mongoose");
//------------------------defining models
const Schema = mongoose.Schema;
 
const company = new Schema({
  company_id:{type:String,trim:true},
  employee_name:{type:String,trim:true},
  employee_id:{type:Schema.Types.ObjectId,ref:'Employee'},
  company_name:{type:String,trim:true},
  joining_date:{type:String},
  resignation_date:{type:String},
},{timestamps:true});


var yahoo159 = mongoose.model("history_company",company);

module.exports = yahoo159;
