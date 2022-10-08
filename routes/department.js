const express = require("express");
const departmentController = require("../controllers/department");

const router = express.Router();

router.post("/create", departmentController.create);

router.get("/get", departmentController.get);

// GETBYID
router.get("/getDepartmetnById", departmentController.getId);

module.exports = router;
