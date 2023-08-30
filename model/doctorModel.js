const  mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"]
    },
    category:{
        type: String,
        required: [true,"Category is required"]
    },
    experience:{
        type: String,
        required: [true,"experices is required"]
    },
    bio_data:{
        type: String,
        required: [true,"bio data is required"]
    },
    channeling_fee:{
        type: Number,
        required: [true,"chanling fee is required"]
    }
},{
    timestamps:true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
