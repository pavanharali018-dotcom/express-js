const express = require("express");
const { v4: uuidv4 } = require("uuid");
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

//Create route
app.post("/students", (req, res) => {
    let id = uuidv4();

    let { name, age, branch } = req.body;

    let newStudent = {
        id,
        name,
        age,
        branch
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

//edit route
app.get("/students/:id/edit",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
    res.json(student);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});