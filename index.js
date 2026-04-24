const express = require('express');

const app = express();

const port = 8080;

app.get("/" , (request , response)=>{
    response.send("server is up and running")
})

app.listen(port,()=>{
    console.log("server is listening on port " + port 
// or console.log(`server is listening on port : ${port}`)
    )
})



const users = [
    {id: 1, name: 'Alice' , email: 'alice@example.com'},
    { id: 2, name: 'Bob' , email: 'bob@example.com' ,},
];

// GET all users
app.get('/users', (req, res)=>{
    res.status(200).json(users);
});

// GET a single user ID
app.get('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user){
        return res.status(404).json({error: 'user not found'});
    }
    res.status(200).json(user);
});