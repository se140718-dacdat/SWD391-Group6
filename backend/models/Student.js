const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    studentID: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    major: { type: String, required: true },
    fieldName: { type: String, required: true },
    cV_URL: { type: String, required: true },
    fullName: { type: String, required: true },
    ojtStatus: Boolean
});

module.exports = mongoose.model('Student', studentSchema);