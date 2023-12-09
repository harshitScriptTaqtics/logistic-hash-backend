const express = require('express');
const superAdminValidator = require('../validators/superAdminValidators');
const superAdminController = require('../controllers/superAdminController');

const superAdminRouter = express.Router();

superAdminRouter.post('/create', superAdminValidator.createSuperAdminValidator, superAdminController.createSuperAdmin)
superAdminRouter.post('/login', superAdminValidator.superAdminLoginValidator, superAdminController.superAdminLogin)

module.exports = { superAdminRouter }