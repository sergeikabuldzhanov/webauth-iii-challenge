const jwt = require("jsonwebtoken");

function makeToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: "1d"
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

module.exports = makeToken;