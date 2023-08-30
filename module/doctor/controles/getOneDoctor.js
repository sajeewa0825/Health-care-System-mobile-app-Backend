const mongoose = require("mongoose");

const getOneDoctor = async (req, res) => {
    const doctorModel = mongoose.model("Doctor");

    try {
        const data = await doctorModel.findOne({
            _id: req.query.id
        });
        // if (data) {
        //     res.status(200).json({
        //         status: "success",
        //         data
        //     });
        // } else {
        //     res.status(400).json({
        //         status: "data get fail",
        //         message: "user not found"
        //     });
        // }
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

module.exports = getOneDoctor;
