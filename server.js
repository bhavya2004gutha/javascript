// const express = require("express")
// const dotEnv = require("dotenv")

// const app = express();
// const port = 3000;

// app.listen(port,() =>{
//     console.log ('sever started running at ${port}')
// })




const express = require("express")
const dotEnv = require("dotenv")
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser")
const employeeroutes = require('/routes/employeeroutes')

const app = express();
dotEnv. config ()
const PORT = process.env.PORT || 5000
MongoClient.connect(process.env.mongo_url)
.then(() =>{
    console.log("Mongodb connected sucessfully")
})
.catch((error) =>{
    console.log("Error",error)
})
const port = 3000;



app.listen(port,() =>{
    console.log ('sever started running at ${port}')
})


