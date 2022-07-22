const Field = require('../models/Field');

const fieldController = {
    getFields: async(req, res) => {
        try {
            const fields = await Field.find();
            res.status(200).json(fields);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = fieldController;