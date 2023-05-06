const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
require("dotenv").config();
const Private_key = process.env.Private_key;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    //search for provided email in database
    const user = await User.findOne({ email });

    //if email cant be verified
    if (!user) {
      return res.status(401).send({ message: "Can't verify email..." });
    }

    //if the email is found , compare the entered password against the password in the database
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("user", user);
    console.log("validPassword", validPassword);
    console.log("password", password);
    console.log("user.password", user.password);
    //if passwords don't match, return
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }

    //else , Respond with a token
    const token = jwt.sign({ id: user._id, email: user.email }, Private_key);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send({ message: "Unable to Log in..." });
  }
};

module.exports = loginUser;
