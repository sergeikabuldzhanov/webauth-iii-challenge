const authRouter = require("./auth-router");
const userRouter = require("./user-router");
const restricted = require("../middleware/jwt-validator");

const apiRouter = require("express").Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", restricted, userRouter);

module.exports = apiRouter