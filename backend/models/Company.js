const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyID: { type: String, required: true },
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    webSite: { type: String, required: true },
    careerField: { type: Array, required: true },
    fieldName: { type: String, required: true },
    introduction: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    applyPosition: { type: String, required: true },
});

module.exports = mongoose.model('Company', companySchema);