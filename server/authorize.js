const jwt = require("jsonwebtoken");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const verifyToken = async (req, res, next) => {
  console.log("req.headers", req.headers);
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: "Can't find token..." });
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log("token", token);
    //check if no authorized(error 401)
    if (!token) {
      res.status(401).send({ message: "Token not valid..." });
    }
    //verify token by decoding it
    let validToken = jwt.verify(token, PRIVATE_KEY);
    console.log(validToken);
    if (!validToken) {
      return res.send({ message: "Can't verify token..." });
    }

    req.user = validToken;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = verifyToken;
