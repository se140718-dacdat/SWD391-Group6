const studentController = require('../controller/studentController');

const router = require('express').Router();


router.get('/get-all-student', studentController.getAllStudent);
router.get('/:username', studentController.getStudent);
router.post('/update/:username', studentController.updateStudent);
module.exports = router;