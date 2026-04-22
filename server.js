// step 1: import the express mode
const express = require('express');

// step 2: Create an Express application instance
const app = express();

const studentInfo =[
   { name: "Alice", age: 20, grade: "A"},
   {name: "Bob", age: 21, grade: "B"},
   {name: "Basit", gae: 35, grade: "A1"}
]
app.get("/all-data",(req , res)=>{
    res.json(studentInfo[2])
})

// Step 3: define a route handler for GET requests to /
app.get('/', function(req, res){
    res.send('Hello, world! welcome to Express.js!');
});

app.get("/about" ,(request , response)=>{
    response.send("this is about page")
})

app.get("/contact" , (request , response)=>{
    response.send("this is contact page")
})

// Step 4: start listening on port 3000
app.listen(3000, function(){
    console.log('Server is up and running');
});