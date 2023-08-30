const express = require("express");
const middleware = require("../../middleware/auth");
const addDoctor = require("./controles/registerDoctor")
const getDoctor = require("./controles/getDoctor")
const getOneDoctor = require("./controles/getOneDoctor")
const doctorUpdate = require("./controles/updatedDoctor")
const deleteDoctor = require("./controles/deleteDoctor")

const doctorRoutes = express.Router() 

// Routes
doctorRoutes.use(middleware);
doctorRoutes.post("/adddoctor",addDoctor);
doctorRoutes.get("/getdoctor",getDoctor);
doctorRoutes.get("/getonedoctor",getOneDoctor);
doctorRoutes.put("/updatedoctor",doctorUpdate);
doctorRoutes.delete("/deletedoctor",deleteDoctor);


module.exports = doctorRoutes
