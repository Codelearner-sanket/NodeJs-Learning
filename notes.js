console.log("notes.js file is loaded in this ...")


var age = 24;

// suppose we have to access age from server.js then we have to export this varibale 
 const addnumber =function (a,b){
    return a+b ;
 }
module.exports={
    age,
  addnumber
}