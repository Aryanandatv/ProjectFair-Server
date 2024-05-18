 //loads .env content into  process.env by default
 require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

//creating server instance
const pfServer=express()

//configuring cors into server
pfServer.use(cors())

//configuring json conversion on server
pfServer.use(express.json())

//configuring routes to server
pfServer.use(router)

//server uploaded files to client side
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000

//calling listen method to  implement listen mode for server to run 
pfServer.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`)
})

//setting response for base_url get request
pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>The get requst Hit successfully</h1>")
})

