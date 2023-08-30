const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const doctorRoute = require("./module/doctor/doctorRoute")

const app = express();

mongoose.connect(process.env.MONGO_URL,{}).then( () =>{
  console.log("connection succesfuly");
}).catch((err) =>{
  console.log(err);
} )

require('./model/doctorModel');

app.use(express.json());
app.use("/doctor",doctorRoute)



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});