const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
    fieldID: { type: String, required: true },
    fieldName: { type: String, required: true }
});

module.exports = mongoose.model('field', fieldSchema);