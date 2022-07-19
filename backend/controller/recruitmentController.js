const Recruitment = require('../models/Recruitment');

const recruitmentController = {
    getRecruitment: async(req, res) => {
        try {
            const recruitments = await Recruitment.find({ companyID: req.params.companyID });
            if (recruitments) {
                res.status(200).json(recruitments);
            } else {
                res.status(200).json("Not found!");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getRecruitments: async(req, res) => {
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
                studentName: req.body.studentName,
                companyID: req.body.companyID,
                companyName: req.body.companyName,
                recruitmentStatus: req.body.recruitmentStatus
            });
            const recruitment = await Recruitment.findOne({ studentID: newRecruitment.studentID });
            if (!recruitment || recruitment.recruitmentStatus === 3) {
                const recruitment = await newRecruitment.save();
                res.status(200).json("Your request have been sent!");
            } else {
                res.status(200).json("Your old request still not resolved!");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateRecruitment: async(req, res) => {
        try {
            if (req.params.recruitmentStatus == 3) {
                const recruitment = await Recruitment.findOneAndDelete({ studentID: req.params.studentID });
                res.status(200).json("Rejected!");
            } else {
                const recruitment = await Recruitment.findOneAndUpdate({ studentID: req.params.studentID }, { recruitmentStatus: req.params.recruitmentStatus });
                res.status(200).json("Accepted!");
            }
        } catch (err) {
            res.status(500).send(error);
        }
    }
};


module.exports = recruitmentController;