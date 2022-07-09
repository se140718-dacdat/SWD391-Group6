const studentController = require('../controller/studentController');

const router = require('express').Router();


router.get('/get-all-student', studentController.getAllStudent);
router.get('/:username', studentController.getStudent);
module.exports = router;