// Write a JavaScript function named calculateCircleArea that takes the radius of a circle
// as a parameter and returns the area of the circle. You can use the formula area = π *
// radius^2. Test the function with a few different radii.

// function calculateCircleArea(radius){
//     return Math.PI *radius*radius;
// }

// // var radius = 2
// console.log(calculateCircleArea(3))
// console.log(calculateCircleArea(4))


// Problem 3: Callback Functions
// Create a function named performOperation that takes two numbers and a callback
// function as parameters. The callback function should determine the operation to be performed
// (addition, subtraction, multiplication, or division) on the two numbers. Call the
// performOperation function with different numbers and callback functions for each
// mathematical operation.

// function performOperation(a,b,callback){
//    return  callback(a,b);

// }
// function add(a,b){
//     return a+b ;
// }
// function subtract(a,b){
//     return a-b ;
// }

// function multiply(a,b){
//     return a*b ;
// }

// function divide(a,b){
//     return a/b ;
// }


// console.log(performOperation(2,3,add))
// console.log(performOperation(2,3,subtract))
// console.log(performOperation(2,3,multiply))
// console.log(performOperation(2,3,divide))


// Write a Node.js program that uses the fs module to read the contents of a text file named
// "inform.txt" and display them in the console.

// const { error } = require('console')
// const fs=require('fs')
// fs.readFile("inform.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log("Error reading file:", err)
//         return ;
//     }
//     console.log(data)
// })


// Create a Node.js program that uses the os module to display the following system
// information:
// ● Total memory available (in bytes)
// ● Free memory available (in bytes)
// ● Operating system platform
// ● Number of CPU cores

// const os = require('os')
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("Platform:", os.platform());
// console.log("Number of CPU Cores:", os.cpus().length);

// Use the lodash library to solve the following problem: Given an array of numbers, write a
// function that returns the sum of all even numbers in the array. Use the _.sumBy function from
// lodash to achieve this.

// var _=require('lodash')

// const num=[2,3,4,5,5,7,8,9,20]

// function sumofnumbers(num){
//     const eventnum=_.filter(num,i=>i%2===0);
//     return _.sumBy(eventnum);
// }

// console.log(sumofnumbers(num))   
// ----------------------------------------------------------------------------------------------------------
// 1st part 
// function callback(){
//     console.log("callback");
// }

// const add=function(a,b,callback){
//     callback();
//     var result= a+b;
//     console.log('result:'+result)
  
// }

// add(3,4,callback)

// add(2,3,() => console.log('add completed'));



// 2nd part 

// var fs=require('fs')
// var os=require('os')
// var user= os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greeting.txt","Hi, Hello "+user.username+"!\n", ()=>{
//     console.log('file is createdd ')
// });


// 3rd part 

// const notes=require('./notes.js')
// console.log("server file is available")

// var age =notes.age;
// console.log(age)

// var result=notes.addnumber(age+18,9);
// console.log(result)



// 4th part  lodash 
// var k= require('lodash');
//  var data =["person", "person", 1,2,3,3,'name','age','2']
//  var filter = k.uniq(data)
//  console.log(filter)

//  console.log(k.isString('sanket'))
