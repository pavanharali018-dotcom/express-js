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
    if(!student){
        return res.status(404).send("Student not found!");
    }
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
     if(!student){
        return res.status(404).send("Student not found!");
    }
    res.json(student);
});

//update route
app.patch("/students/:id",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
    let { name, age, branch } = req.body;
    if(req.body.name!==undefined){
      student.name = name;
    }
     if(req.body.age!==undefined){
      student.age = age;
    }
     if(req.body.branch!==undefined){
      student.branch = branch;
    }
    res.status(200).json(student);
});

//delete route
app.delete("/students/:id",(req,res)=>{
    let { id } = req.params;
    let studentIdx = students.findIndex((s)=> s.id===id);
    if(studentIdx===-1){
       return res.status(404).send("Not found");
    }
    students.splice(studentIdx,1);
    res.send("Deleted successfully");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});