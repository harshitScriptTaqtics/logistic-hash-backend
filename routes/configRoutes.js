const express = require('express');
const configController = require('../controllers/configController');
const configValidator = require('../validators/configValidators');

const configRouter = express.Router();

configRouter.get('/who-am-i', configValidator.whoAmIValidator, configController.whoAmIController)

module.exports = { configRouter }