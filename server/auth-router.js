const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const { insert, getByUsername } = require("../data/user-model");
const makeToken = require("./make-token");

router.post("/register", async (req, res, next) => {
  const user = req.body;
  try {
    const hashedPassword = await bcryptjs.hash(user.password, 12);
    user.password = hashedPassword;
    const newUser = await insert(user);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const credentials = req.body;
  try {    
    const user = await getByUsername(credentials.username);
    const credentialsAreCorrect = await bcryptjs.compare(
      credentials.password,
      user.password
    );
    if (credentialsAreCorrect) {
      const token = makeToken(user);
      res.status(200).json({ message: `Welcome ${user.username}!`, token });
    } else {
      res.status(401).json({ message: `You shall not pass!` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;