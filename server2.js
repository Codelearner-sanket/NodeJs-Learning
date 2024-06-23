
// ● Inter Conversion JSON to an Object in Node.js:

// JSON is string 
const { json } = require("express");

const jsonString='{"name": "Alice", "age": 25, "hobbies": ["reading","painting"]}'

const jsonObject= JSON.parse(jsonString);
console.log(jsonObject)

console.log(jsonObject.name)


console.log(typeof jsonString) // string 
console.log(typeof jsonObject)  // object
// JSON string
const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object
// JSON string
console.log(jsonStringified); // Output: {"name": "Alice", "age":25}