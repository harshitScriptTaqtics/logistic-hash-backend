const express = require("express");
const { getEnvValues } = require("./utils/helper");
const notFoundController = require("./controllers/notFoundController");
const errorBoundaryController = require("./controllers/errorBoundaryController");
const { connectDb } = require("./db/connectDb");
const bodyParser = require('body-parser')
const { configRouter } = require("./routes/configRoutes");
const { superAdminRouter } = require('./routes/superAdminRoutes')
require('dotenv').config();

const server = express();

server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))
server.use('/config', configRouter);
server.use('/super-admin', superAdminRouter)
server.use('*', notFoundController.notFoundController)
server.use(errorBoundaryController.errorBoundaryController)

connectDb().then((response) => {
    if (response) {
        server.listen(getEnvValues('PORT') || 3000, (error => {
            if (error) return console.log(`Failed to start the ${getEnvValues('SERVER_NAME')} server in ${getEnvValues('SERVER_STATE')} state at port ${getEnvValues('PORT') || 3000}.`);
            console.log(`${getEnvValues('SERVER_NAME')} server started in ${getEnvValues('SERVER_STATE')} state at port ${getEnvValues('PORT') || 3000}.`)
        }))
    }
    else throw new Error('Failed to connect database.')
}).catch((error) => {
    console.log(`Database connection error: ${error.message}`);
})

