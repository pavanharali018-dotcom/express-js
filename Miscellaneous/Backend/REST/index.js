const express = require("express");
const app = express();

const port = 3000;

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