const express = require('express');
const configController = require('../controllers/configController');

const configRouter = express.Router();

configRouter.get('/who-am-i', configController.whoAmIController)

module.exports = { configRouter }