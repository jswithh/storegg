const express = require('express');
const router = express.Router();

const categoryController = require('./controller');

router.get('/', categoryController.index);

module.exports = router;