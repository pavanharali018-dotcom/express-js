const express = require("express");
const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.use(express.urlencoded({ extended: true }));

app.get("/register",(req,res)=>{
    const {username,pass} = req.query;
   res.send(`Welcome ${username}`);
});

app.post("/register",(req,res)=>{
   let {username, password}=req.body;
   res.send(`standard post request!Welcome ${username}`);
});