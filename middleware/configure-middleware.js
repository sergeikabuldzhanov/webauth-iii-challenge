const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

function configureMiddleware(server) {
  server.use(express.json());
  server.use(cors());
  server.use(helmet());
}

module.exports = configureMiddleware;
