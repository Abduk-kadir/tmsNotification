
const express = require('express')
const app = express()
app.use(express.json())
const port=3000
app.listen(port,()=>console.log(`app is listing on port ${port}`));
const sendNotification=require('./sendNotification')
app.get('/not',async(req,res)=>{
    let body=req.body
    let {title,token,message}=body
    console.log(token)
    sendNotification(token,title,message)
    res.send('notication is send to user')

})