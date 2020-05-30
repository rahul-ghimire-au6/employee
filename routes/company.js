const express=require('express')
const router=express.Router()
// const user_controller = require('../controller/employee')
const controller=require('../controller/company')
const authenticate=require('../middlewares/middleware.js')
const session=require('express-session')



router.get('/create_company',authenticate.authenticate1,controller.get.register_company)
router.get('/to_company',controller.get.company_dashboard)
router.get('/to_more_details/:id',controller.get.company_employee_details)
router.post('/register_company',authenticate.authenticate1,controller.post.register_company)







module.exports = router