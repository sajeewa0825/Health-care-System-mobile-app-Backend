const  mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    bio_data:{
        type: String,
        required: true
    },
    channeling_fee:{
        type: Number,
        required: true
    }
},{
    timestamps:true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
