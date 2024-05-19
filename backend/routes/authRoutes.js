const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/', authController.login);

module.exports = router;