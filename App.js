
const express =require('express')
const app=express()
const adminrouter=require('./routers/admin')
const shoproutes=require('./routers/shop')
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use('/admin',adminrouter)
app.use(shoproutes)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})



app.listen(3000)