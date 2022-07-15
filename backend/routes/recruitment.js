const recruitmentController = require('../controller/recruitmentController');

const router = require('express').Router();

router.post('/create-recruitment', recruitmentController.createRecruitment);
router.get('/:companyID', recruitmentController.getRecruitment);
router.post('/update/:studentID/:recruitmentStatus', recruitmentController.updateRecruitment);

module.exports = router;