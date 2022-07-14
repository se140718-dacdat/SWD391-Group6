const Recruitment = require('../models/Recruitment');

const recruitmentController = {
    getAllRecruitment: async(req, res) => {
        try {
            const recruitments = await Recruitment.find();
            res.status(200).json(recruitments);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    createRecruitment: async(req, res) => {
        try {
            const newRecruitment = await new Recruitment({
                studentID: req.body.studentID,
                companyID: req.body.companyID,
                recruitmentStatus: req.body.recruitmentStatus
            });
            const recruitment = await newRecruitment.save();
            res.status(200).json(recruitment);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};


module.exports = recruitmentController;