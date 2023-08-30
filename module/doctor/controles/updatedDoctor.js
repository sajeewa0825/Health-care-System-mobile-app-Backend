const mongoose = require("mongoose");

const updateDoctor = async (req, res) => {
    const { name, category, experience, bio_data, channeling_fee } = req.body;

    const doctorModel = mongoose.model("Doctor");

    try {
        const updated = await doctorModel.findByIdAndUpdate(req.query.id, {
            name: name,
            category: category,
            experience: experience,
            bio_data: bio_data,
            channeling_fee: channeling_fee
        })
        if (!updated) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            status:"succefull",
            message:"data Updated"
        })
    } catch (error) {
        res.status(200).json({
            status:"error",
            error
        })
    }
}

module.exports = updateDoctor;