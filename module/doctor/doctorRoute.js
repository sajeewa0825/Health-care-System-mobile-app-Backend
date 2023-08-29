const express = require("express");
const middleware = require("../../middleware/auth");
const addDoctor = require("./controles/registerDoctor")

const transactionRoutes = express.Router() 

// Routes
transactionRoutes.post("/adddoctor",addDoctor);
transactionRoutes.use(middleware);




module.exports = transactionRoutes
