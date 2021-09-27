const express = require('express');
const app = express();


const port = process.env.port || 8000;

app.get("/",(req,res) =>{
    res.send("<h1>Hi There!</h1>");
});

app.listen(port,()=>console.log(`the app is running on port ${port}`));