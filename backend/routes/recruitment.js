const recruitmentController = require('../controller/recruitmentController');

const router = require('express').Router();

router.post('/create-recruitment', recruitmentController.createRecruitment);
router.get('/getOJTStatus/:studentID', recruitmentController.getOJTStatus);
router.get('/get-recruitments', recruitmentController.getRecruitments);
router.get('/:companyID', recruitmentController.getRecruitment);
router.post('/update/:recruitmentStatus', recruitmentController.updateRecruitment);

module.exports = router;