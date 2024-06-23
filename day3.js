const express=require('express');
const Person = require('./Model/person');
const app= express();

app.get('/', (req,res)=> {
    res.send("Hi ApI is ready ")
})

app.get('/weather', (req, res) => {
    const weatherData = {
        temperature: 25,
        conditions: 'Sunny',
        city: 'Los Angeles'
    };
    res.send(weatherData); // Use res.json() to send JSON data
});
    

app.listen(3000,()=>
console.log("listening on port 3000")
)


