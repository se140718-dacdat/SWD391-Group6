const recruitmentController = require('../controller/recruitmentController');

const router = require('express').Router();

router.post('/create-recruitment', recruitmentController.createRecruitment);
router.get('/get-all-recruitment', recruitmentController.getAllRecruitment);

module.exports = router;