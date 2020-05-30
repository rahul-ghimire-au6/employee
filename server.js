const express=require('express')
const morgan=require('morgan')
const hbs=require('hbs')
const path=require('path')
const app=express()
const methodOverride = require("method-override");
const session = require('express-session')
const employee=require('./routes/employee.js')
const company=require('./routes/company.js')
require('./dbsetting')
//require('./offlinedbsetting')
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(employee)
app.use(company)


//loading static filepath
app.use(express.static(path.join(__dirname,'views')))
//hbs setting
app.set('view engine', 'hbs');
// Registering hbs partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));
//setting  default layout
app.set("view options", { layout: "main" });

app.get('/',function(req,res){
    res.render('landing.hbs')
})




var port=process.env.PORT || 8080;

app.listen(port,function(){
    console.log('server is listening at port: '+port)
})
