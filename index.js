const express=require("express");
const app = express();
const port=3000;
app.get("/contact",(req,res)=>{
    res.send("hello from contact server!");
});
app.listen(port,()=>{
    console.log(`server is running at port:${port}`);
});

