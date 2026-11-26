const express = require("express");

const app = express();

const port = 3000;

//student data
let students = [
    {
        id: "101",
        name: "Pavan",
        age: 19,
        branch: "CSE"
    },
    {
        id: "102",
        name: "Rahul",
        age: 20,
        branch: "ECE"
    },
    {
        id: "103",
        name: "Ananya",
        age: 19,
        branch: "ISE"
    }
];

// Routes will be added here

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});