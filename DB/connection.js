const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Connetion Successfull!!")
}).catch((err)=>{
    console.log("MongoDB  Connetion Failed!!")
    console.log(err)
})

