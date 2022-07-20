const Recruitment = require('../models/Recruitment');
const Student = require('../models/Student');

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

    getOJTStatus: async(req, res) => {
        try {
            const recruitment = await Recruitment.findOne({ studentID: req.params.studentID });
            if (recruitment.companyName != "") {
                res.status(200).json(recruitment.companyName);
            } else if (recruitment) {
                res.status(200).json("Not yet!");
            } else {
                res.status(200).json("Not yet!");
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
            if (!recruitment) {
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
            const recruitment = await Recruitment.findOne({ studentID: req.body.studentID });
            if (req.params.recruitmentStatus == 2) {
                if (!recruitment) {
                    const newRecruitment = await new Recruitment({
                        studentID: req.body.studentID,
                        studentName: req.body.studentName,
                        companyID: req.body.companyID,
                        companyName: req.body.companyName,
                        recruitmentStatus: 2
                    });
                    const response = await newRecruitment.save();
                    res.status(200).json("Your request have been sent!");
                } else if (recruitment.recruitmentStatus == 1) {
                    const response = await Recruitment.findOneAndUpdate({ studentID: req.body.studentID }, { recruitmentStatus: req.body.recruitmentStatus, companyID: req.body.companyID, companyName: req.body.companyName });
                    res.status(200).json("Your request have been sent!");
                } else {
                    res.status(200).json("Your request has been applied or processing!");
                }
            } else if (req.params.recruitmentStatus == 3) {
                const response = await Recruitment.findOneAndUpdate({ studentID: req.body.studentID }, { recruitmentStatus: req.params.recruitmentStatus });
                const student = await Student.findOneAndUpdate({ studentID: recruitment.studentID }, { ojtStatus: true });
                res.status(200).json("Accepted!");
            } else if (req.params.recruitmentStatus == 4) {
                const response = await Recruitment.findOneAndUpdate({ studentID: req.body.studentID }, { recruitmentStatus: 1, companyID: "", companyName: "" });
                res.status(200).json("Rejected!");
            } else {
                res.status(200).json("Error!");
            }
        } catch (err) {
            res.status(500).send(error);
        }
    }
};


module.exports = recruitmentController;