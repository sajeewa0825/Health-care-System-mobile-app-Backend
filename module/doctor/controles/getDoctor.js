const mongoose = require("mongoose");

const getDoctor = async (req, res) => {
  const doctorModel = mongoose.model("Doctor");
  try {
    const data = await doctorModel.find({});
    res.status(200).json({
      status: "success",
      data
    });
  } catch (error) {
    res.status(400).json({
      status: "data get fail",
      error
    });
  }
};

module.exports = getDoctor;
