const mongoose = require("mongoose");

const addDoctor = async (req, res) => {
    const { name, category, experience, bio_data, channeling_fee } = req.body;
    const doctorModel = mongoose.model("Doctor");

    try {

        await doctorModel.create({
            name: name,
            category: category,
            experience: experience,
            bio_data: bio_data,
            channeling_fee: channeling_fee,
        });

        res.status(200).json({
            status: "success",
            message: "Doctor added successfully",
        });

    } catch (error) {
        res.status(400).json({
            status: "regidter fail",
            error,
        });
    }
};

module.exports = addDoctor;
