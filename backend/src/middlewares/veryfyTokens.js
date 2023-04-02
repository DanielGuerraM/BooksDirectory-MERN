const jwt = require("jsonwebtoken");

const veryfyToken = async (req, res, next) => {
  const token = req.headers["token"];

  if (token) {
    jwt.verify(token, "Secret", (err, data) => {
      if (err) return res.status(400).json({ Message: "Invalid Token" });
      else {
        req.user = data;
        next();
      }
    });
  } else {
    res.status(400).json({ Message: 'The token is required' })
  }
};

module.exports = veryfyToken;
