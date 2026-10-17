// const express=require("express");
// const app = express();
// const port=3000;
// app.get("/contact",(req,res)=>{
//     res.send("hello from contact server!");
// });
// app.listen(port,()=>{
//     console.log(`server is running at port:${port}`);
// });

//express middleware
const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Someone visited my website!");
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Welcome to my website!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});