const express = require("express");
const employeeController = require("../controllers/employee");

const router = express.Router();

//Create
router.post('/create',employeeController.create);

//Get
router.get('/getAllEmployees',employeeController.get);

// GETBYID
router.get('/getEmployeeById',employeeController.getId);


module.exports = router;  