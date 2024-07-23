const express = require('express');

const v1Routes = require('./v1');
const {InfoController} = require('../controllers/index');

const apiRouter = express.Router();

apiRouter.use('/v1', v1Routes);

apiRouter.get('/info', InfoController.info);

module.exports = apiRouter;