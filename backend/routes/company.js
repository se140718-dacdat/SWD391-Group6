const companyController = require('../controller/companyController');

const router = require('express').Router();


router.get('/get-all-company', companyController.getAllCompany);
router.get('/:companyID', companyController.getCompany);
module.exports = router;