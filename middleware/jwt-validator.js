const jwt = require("jsonwebtoken");

function jwtValidator(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: `You shall not pass!` });
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  } else {
    res.status(400).json({ message: `Missing credentials` });
  }
}

module.exports = jwtValidator;