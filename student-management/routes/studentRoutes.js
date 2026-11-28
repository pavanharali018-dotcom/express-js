const students = require("../data/students");

const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();


//index route
router.get("/students",(req,res)=>{
    res.send(students);
});

//show route
router.get("/students/:id",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
    if(!student){
        return res.status(404).send("Student not found!");
    }
    res.json(student);
});

//Create route
router.post("/students", (req, res) => {
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
router.get("/students/:id/edit",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
     if(!student){
        return res.status(404).send("Student not found!");
    }
    res.json(student);
});

//update route
router.patch("/students/:id",(req,res)=>{
    let { id } = req.params;
    let student = students.find((s)=>s.id===id);
    if(!student){
        return res.status(404).send("Student not found!!");
    }
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
router.delete("/students/:id",(req,res)=>{
    let { id } = req.params;
    let studentIdx = students.findIndex((s)=> s.id===id);
    if(studentIdx===-1){
       return res.status(404).send("Not found");
    }
    students.splice(studentIdx,1);
    res.send("Deleted successfully");
});