const mongoose = require('mongoose');

const recruitmentSchema = mongoose.Schema({
    studentID: { type: String, required: true },
    studentName: { type: String, required: true },
    companyID: String,
    companyName: String,
    recruitmentStatus: { type: Number, required: true },
});

module.exports = mongoose.model('Recruitment', recruitmentSchema);