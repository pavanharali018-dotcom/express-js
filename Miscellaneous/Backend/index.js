const express = require("express");
const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/register",(req,res)=>{
   res.send("Standard get response!");
});