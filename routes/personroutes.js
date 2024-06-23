const express =require('express');
const router=express.Router();

const Person =require('./../Model/person')

// post route to add aperson 
router.post('/',async (req,res)=>{
   
    try {
            const data =req.body //assuming the request body contains the person data 
 
             //Create a new Person document using the Mongoose model 
            const newperson =new Person(data);
             // save the  new person to the  database 
            const response=await newperson.save();
            console.log('data saved')
            res.status(200).json(response)
    }
    catch(err){
     console.log(err);
     res.status(500).json({error:"internal server issue"})
    }
     
 })
 
 router.get('/',async(req,res)=>{
     try{
         const data=await Person.find();
         console.log("data fetched ");
         res.status(200).json(data);
     }
     catch(err){
         console.log(err);
         res.status(500).json({error:"internal server failure"})
 
     }
 })
 
 
router.get('/:workType',async(req,res)=>{
     try{
         const workType=req.params.workType;
         if (workType==="chef" || workType==="manager" ||workType==="waiter"){
             const response= await Person.find({work:workType});
             console.log("data fetched ");
             res.status(200).json(response);
         }
         else{
             res.status(404).json({error:'invalid worktype'})
         }
 
     }
     catch(err){
         console.log(err);
         res.status(500).json({error:"internal server issue"})
 
     }
 })


 router.put('/:id',async(req,res)=>{
    try{
     const personId=req.params.id ;// Extraxt the id from th URL parameter 
     const updatePersonData=req.body; //Updated data for the person 

     const response= await Person.findByIdAndUpdate(personId,updatePersonData,{
        new:true,//return the document
        runvalidators:true,//Run mongoose validations
     })
     if(!response){
        return res.status(404).json({error:'Person not found'})
     }
     console.log('data updated');
     res.status(200).json(response)

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server issue"})

    }
 })


 router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;

        const response= await Person.findByIdAndDelete(personId);
        console.log('data deleted  successfully ');
         res.status(200).json(response)
        if(!response){
            return res.status(404).json({error:'Person not found'})
         }
        
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server issue"})

    }
})

 module.exports=router;