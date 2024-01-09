const express=require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    console.log('In the other middleware')
    res.send('<h1>Welcome to Express Js</h1>')
})
module.exports=router