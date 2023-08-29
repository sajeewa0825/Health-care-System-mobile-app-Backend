const mongoose = require('mongoose');

const addDoctor = async (req, res) =>{
    const {name, category, experience, bio_data, channeling_fee} = req.body;
    console.log(category)
    const doctorModel = mongoose.model("Doctor");

    if(!name) throw "Name is required";
    if(!category) throw "Category is required";
    if(!experience) throw "experices is required";
    if(!bio_data) throw "bio data is required";
    if(!channeling_fee) throw "chanling fee is required";

    await doctorModel.create({
        name:name,
        category:category,
        experience:experience,
        bio_data:bio_data,
        channeling_fee:channeling_fee
    });

    res.status(200).json({
        status: 'success',
        message: 'Doctor added successfully'
    })
}

module.exports = addDoctor;