const mongoose = require("mongoose");

const deleteDoctor = async (req, res) =>{
    const doctorModel = mongoose.model("Doctor")
    try{
        const deleteDoctor = await doctorModel.findByIdAndRemove(req.query.id)

        if (!deleteDoctor) {
            return res.status(404).json({ message: 'User not found' });
        }

       return res.status(200).json({
            status:"succefuly",
            message:"delete doctor"
        })
    } catch (error){
       return res.status(400).json({
            status:"unsuccefuly",
            message:"delete faill"
        })
    }
}

module.exports = deleteDoctor;