const recruitmentController = require('../controller/recruitmentController');

const router = require('express').Router();

router.post('/create-recruitment', recruitmentController.createRecruitment);
router.get('/:companyID', recruitmentController.getRecruitment);

module.exports = router;