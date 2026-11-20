const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { v4: uuidv4 } = require('uuid');


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

let posts = [
    { 
      id: uuidv4(),
      username:"CaptainAmerica",
      content:"i am brave soldier",
    },

     { 
      id:uuidv4(),
      username:"IronMan",
      content:"i am super intelligent billionaire",
    },

     { 
      id:uuidv4(),
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
  let id = uuidv4();
  posts.push({ id , username ,content});
  res.redirect("/posts");
});

//show route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) =>id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("show.ejs", { post });
});

//patch 
app.patch("/posts/:id",(req,res)=>{
    console.log(id);
    res.send("Patch route working");
});
