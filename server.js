const express = require("express");
const { getEnvValues } = require("./utils/helper");
const { configRouter } = require("./routes/configRoutes");
const notFoundController = require("./controllers/notFoundController");
const errorBoundaryController = require("./controllers/errorBoundaryController");
require('dotenv').config();

const server = express();

server.use('/config', configRouter);
server.use('*', notFoundController.notFoundController)
server.use(errorBoundaryController.errorBoundaryController)

server.listen(getEnvValues('PORT') || 3000, (error => {
    if (error) return console.log(`Failed to start the ${getEnvValues('SERVER_NAME')} server in ${getEnvValues('SERVER_STATE')} state at port ${getEnvValues('PORT') || 3000}.`);
    console.log(`${getEnvValues('SERVER_NAME')} server started in ${getEnvValues('SERVER_STATE')} state at port ${getEnvValues('PORT') || 3000}.`)
}))
