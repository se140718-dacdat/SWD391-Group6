const mongoose = require('mongoose');

const recruitmentSchema = mongoose.Schema({
    studentID: { type: String, required: true },
    companyID: { type: String, required: true },
    recruitmentStatus: { type: Number, required: true }
});

module.exports = mongoose.model('Recruitment', recruitmentSchema);