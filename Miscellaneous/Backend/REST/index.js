const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

app.get("/students", (req, res) => {
    res.send("List of all students");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//new route
app.get("/students/new", (req, res) => {
    res.send("Form to create a new student");
});

//create route
app.post("/students", (req, res) => {
    res.send("New student created");
});
