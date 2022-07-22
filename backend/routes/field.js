const fieldController = require('../controller/fieldController');

const router = require('express').Router();

router.get('/get-fields', fieldController.getFields);

module.exports = router;