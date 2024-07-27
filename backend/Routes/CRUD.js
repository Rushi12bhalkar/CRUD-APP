
const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')   //  Cors-->information



const bodyparser = require('body-parser');
router.use(bodyparser.json())

const StudentModule = require("../models/student")
router.use(express.json())

router.use(cors())

router.get('/', (req,res)=>
{
   res.send("Hello")
})

// Post API : - add student details api

router.post("/create",async(req,res)=>
{
   try
   {
     const data = new StudentModule(req.body)
     await data.save();
     res.status(201).send(data);
   }
   catch
   {
     console.log(err);
   }
})

// GET ALL Students API
router.get('/list',async(req,res)=>
{
   try
   {
      const info = await StudentModule.find();
      res.send(info)
   }
   catch
   {
     console.log(err)
   }
})

// get specific student details API.

router.get('/student/:id',async(req,res)=>
{
   try
   {
      const student = await StudentModule.findById(req.params.id)
      res.send(student)
   }
   catch
   {
         res.status(404).send({message:"Student is not found"})
   }
})

// delete student

router.delete('/delete/:id',async(req,res)=>
   {
      try
      {
         const student = await StudentModule.findByIdAndDelete(req.params.id)
         res.send("Deleted...")
        
      }
      catch
      {
            res.status(404).send({message:"Student is not found"})
      }
   })

   // find by Id and update -- > PUT

   router.put('/update/:id',async(req,res)=>
      {
         try
         {
            const student = await StudentModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.send(student)
           
         }
         catch
         {
               res.status(809).send({message:"Student is not found"})
         }
      })

   // Searech Student by name

   router.get('/search/:name', async(req, res) => 
   { 
      console.log(req.params.name)
          const result =  await StudentModule.find(
            {
               "$or":[
                  {name:{$regex: req.params.name}},
                  
               ]
            }
           
         );
          res.send(result);
  });

   
      //search student by name
      // search student by marks
      //search student by range -- age -- 20 to 23
      //max marks
      // min marks
      //search student by city
      //search student by city ---> Pune Marks total
      // count student by city.
      // date or year API

    module.exports = router;