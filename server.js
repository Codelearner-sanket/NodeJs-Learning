

const express = require('express')
const app = express();
const db=require('./db')


const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./Model/person')
const Menuitem=require('./Model/Menu');

app.get('/', function (req, res) {
  res.send('Welcome to the Hotel !!!')
})

const menuitemRoutes=require('./routes/menuitemroutes');
app.use('/Menu',menuitemRoutes)

//import the router files 
const personRoutes=require('./routes/personroutes')
//use the router
app.use('/person', personRoutes)

app.listen(3000,()=>{
    console.log("listening on port 3000")
})