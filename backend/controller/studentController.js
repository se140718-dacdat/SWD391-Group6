const Student = require('../models/Student');

const studentController = {
    getStudent: async(req, res) => {
        try {
            const student = await Student.findOne({ username: req.params.username });
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(200).json("Not found!");
            }
        } catch (err) {
            res.status(500).json("Not found!");
        }
    },
    getAllStudent: async(req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json(error);
        }
    }
}

module.exports = studentController;