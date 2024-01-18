
const express =require('express')
const path=require('path')
const app=express()
const adminrouter=require('./routers/admin')
const shoproutes=require('./routers/shop')
const contactroutes=require('./routers/contact')

const bodyparser=require('body-parser')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended:false}))
app.use('/admin',adminrouter)
app.use(shoproutes)
app.use(contactroutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(3000)