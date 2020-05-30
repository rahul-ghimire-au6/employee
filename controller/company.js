const employee=require('../models/employmodel');
const company=require('../models/companymodel');
const history=require('../models/history')
var dateFormat = require('dateformat');
var now = new Date();

module.exports = {
    get:{
        register_company:async (req,res)=>{
            userid=req.session.userid
            let data=await employee.find({_id:userid})
            if(data[0].current_company==='NA'||data[0].current_company==='na'){
               return res.render('register_company.hbs')
            }
            else{
                let a1 = `<script>
                alert('you are currently working hence cant create a company');
                window.location.href='/dashboard';
                </script>`
               res.send(a1)
            }            
        },
        company_dashboard:async(req,res)=>{
            let a = await company.find({}).then(function(myjson){
                data=myjson;
                res.render('company_dashboard.hbs',{data})
            })    
            
        },
        company_employee_details:async(req,res)=>{
            let temp=req.params
            let b = await history.find({company_id:temp.id}).populate('employee_id').then(function(myjson){
                data=myjson;
                console.log(data)
                res.render('company_more_details',{data})            
            })

        }        
    },
    post:{
        register_company:async (req,res)=>{
            userid=req.session.userid
            temp=req.body
            let userdata=await employee.find({_id:userid})
            console.log(userdata[0])
            let data={
                company_name:temp.company_name,
                company_type:temp.company_type,
                address:temp.address,
                email:temp.company_email,  
                created_by_id:userdata[0]._id,
                created_by:userdata[0].name,
            }
            let output= await company.create(data)
            console.log(output)
            let newdata={
                current_company:temp.company_name,
                current_joining_date:dateFormat(now, "isoDate")
            }
            let a= await employee.find({_id:userid}).updateOne(newdata)
            let b={
                company_id:output._id,
                employee_id:userid,
                employee_name:userdata.name,
                company_name:temp.company_name,
                joining_date:dateFormat(now,'isoDate'),
            }
            let c = await history.create(b)
            console.log(c)
            let a1 = `<script>
                             alert('Company Created Successfull');
                             window.location.href='/dashboard';
                             </script>`
                            res.send(a1)
            
        }
}
}