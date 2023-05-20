const express = require("express");
const server = express();
const cors = require("cors");
//conected to front end
server.use(cors({ origin: "http://localhost:3000" }));
const logic = require("./services/logic");
//data convertion to json from javascript
server.use(express.json());

server.listen(8000, () => {
  console.log("__________ems server connected__________");
});

//get all emloyee

server.get("/getEmployees", (req, res) => {
  logic.getAllEmployees().then((result) => {
    res.status(result.statusCode).json(result);
  });
});
server.get("/get_employee/:id", (req, res) => {
  logic.getEmployee(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
server.delete("/deleteemployee/:id", (req, res) => {
  logic.removeEmployee(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
server.post("/addEmployee",(req, res) => {
  logic.addNewEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience
    ).then((result) => {
      res.status(result.statusCode).json(result);
    });
});
server.post("/editEmployee",(req,res)=>{
    logic.editEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience
    ).then((result) => {
        res.status(result.statusCode).json(result);
      });
})

