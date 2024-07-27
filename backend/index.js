
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/CRUD_APP"


app.use((req,res,next)=>
    {
      res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept"
      );
      next();
    })

    
async function connect()
{
  try{
    await mongoose.connect(url);
    console.log("Connected Successfully")
  }
  catch(error)
  {
    console.error(error);
  }
}

connect();


app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api',require("./Routes/CRUD"));

app.listen(8080)
console.log("Port 8080")