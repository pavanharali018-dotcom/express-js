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
      id:101,
      username:"CaptainAmerica",
      content:"i am brave soldier",
    },

     { 
      id:102,
      username:"IronMan",
      content:"i am super intelligent billionaire",
    },

     { 
      id:103,
      username:"Thor",
      content:"i am God of thunder",
    },

];

//index route
app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

//create route
app.get("/posts/new",(req,res)=>{
   res.render("new.ejs");
});

//post route
app.post("/posts",(req,res)=>{
  let {username,content} = req.body;
  posts.push({username,content});
  res.redirect("/posts");
});

//show route


