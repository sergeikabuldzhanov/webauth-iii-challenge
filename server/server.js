//express
const express = require("express");

//middleware config function
const configureMiddleware = require("../middleware/configure-middleware");

//routers
const apiRouter = require('./api-router');
//restrict access on no or invalid token

const server = express();
configureMiddleware(server);
server.use("/api", apiRouter);

module.exports = server;
