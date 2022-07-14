const Company = require('../models/Company');

const companyController = {
    getCompany: async(req, res) => {
        try {
            const company = await Company.findOne({ companyID: req.params.companyID });
            if (company) {
                res.status(200).json(company);
            } else {
                res.status(200).json("Not found!");
            }
        } catch (err) {
            res.status(500).json("Not found!");
        }
    },
    getAllCompany: async(req, res) => {
        try {
            const companies = await Company.find();
            res.status(200).json(companies);
        } catch (err) {
            res.status(500).json(error);
        }
    }
}

module.exports = companyController;