
const express = require('express')
const app = express();
const db=require('./db')
require('dotenv').config();
const passport =require('./auth')

const PORT=process.env.PORT ||3000

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./Model/person')
const Menuitem=require('./Model/Menu');


//Middleware functions
const logRequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); // move on tothe next phase 
}

// we have cretaed logrequest for 1 endpoint but we all endpoint so , 
app.use(logRequest)// this line tells express to use this middleware for all routes 

app.use(passport.initialize())
// 
const localAuthMiddleware= passport.authenticate('local',{session:false})
app.get('/',localAuthMiddleware , function (req, res) {   
 //logRequest  we can use in bewteen function and '/'
  res.send('Welcome to the Hotel !!!')
})



const menuitemRoutes=require('./routes/menuitemroutes');
app.use('/Menu',menuitemRoutes)   // here we can use localAuthMiddleware in between endpoint and menuRoutes 

//import the router files 
const personRoutes=require('./routes/personroutes')
//use the router
app.use('/person',localAuthMiddleware, personRoutes)// here also we can pass middleware for person endpoint i.e. logrequest
app.listen(PORT,()=>{
    console.log("listening on port 3000")
})