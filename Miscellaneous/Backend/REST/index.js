const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

let posts = [
    { 
      username:"CaptainAmerica",
      content:"i am brave soldier",
    },

     { 
      username:"IronMan",
      content:"i am super intelligent billionaire",
    },

     { 
      username:"Thor",
      content:"i am God of thunder",
    },

];

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});


