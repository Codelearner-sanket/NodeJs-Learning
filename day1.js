// Problem 1: Conditional Statements (if-else)
// You run a movie theater, and you want to offer discounts based on a person's age. Write a
// JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"


// const user= 18
// if(user<=18){
//     console.log("You get a 20% discount!");
// }
// else if(user>18 && user<=65){
//     console.log("Normal ticket price applies");
// }
// else{
//     console.log("You get a 30% senior discount!");
// }


// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
// and width of the rectangle and store them in variables. Calculate and display the area using
// the formula: `area = length * width`.

// const length = parseFloat(0.1);
// const width = parseFloat(10);
// const area = length * width;
// console.log("The area of the rectangle is:", area);


// You're creating an online store. Define a JavaScript object named "product" with the following
// properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object template and display their details using
// console.log.

// const product1 = {
//     name: "Smartphone",
//     price: 399.99,
//     inStock: true
//     };
// const product2 = {
//     name: "Laptop",
//     price: 999.99,
//     inStock: false
//     };
// const product3 = {
//     name: "Headphones",
//     price: 49.99,
//     inStock: true
//     };
// console.log(product1);
// console.log(product2);
// console.log(product3);
    


// You're organizing a party and want to keep track of the guest list. Create an array called
// "guestList" and add the names of at least five guests. Then, write a program that checks if a
// given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
// otherwise, display "Sorry, you're not on the guest list.

// const guest=["sanket", 'vijay', 'aditya']
// var user='adita'
// if(guest.includes(user)){
//     console.log("you can enter ")
// }
// else{
//     console.log("get out ");
// }


// You're working on a weather app. Create a JSON object representing the weather forecast for
// a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
// Display the information using console.log.
// Remember to encourage your students to experiment and think creatively while solving these
// problems. They can use the concepts you've taught them to come up with their own solutions.
// This will not only help solidify their understanding but also foster their problem-solving skills in
// JavaScript.

const weatherForecast = {
    date: "2023-08-06",
    temperature: 28,
    conditions: "Sunny",
    humidity: 60
    };

console.log(weatherForecast.date)
console.log(weatherForecast.temperature +"C")
console.log(weatherForecast.conditions)
console.log(weatherForecast.humidity)

