const router = require("express").Router();
const { getByDepartment } = require("../data/user-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await getByDepartment(req.decodedToken.department);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;