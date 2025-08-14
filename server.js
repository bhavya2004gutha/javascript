
const express = require("express")
const dotEnv = require("dotenv")
const mongoose=require("mongoose")

const routes = require('../mongodb/Routes/employeeRoutes')

const app = express();
dotEnv. config ()
app.use(express.json())
const PORT = 5500

mongoose.connect(process.env.mongo_url)
.then(() =>{
    console.log("Mongodb connected sucessfully")
})
.catch((error) =>{
    console.log("Error",error)
})

app.listen(PORT,() =>{
    console.log (`sever started running at ${PORT}`)
})

app.use("/main",routes)
