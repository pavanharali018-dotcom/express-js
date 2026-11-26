const express = require("express");

const app = express();
app.use(express.json());
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
//index route
app.get("/students",(req,res)=>{
    res.send(students);
});

//show route
app.get("/students/:id",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
    res.json(student);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});