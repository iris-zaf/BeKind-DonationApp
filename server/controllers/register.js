// const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../Models/userModel");
// Register-sign up
/*
//if the user is sending all the required information or not
//if false=> send a message name,email,password are required
// if true=> check if the username exists in the database or not
// if true=> send a message this email already exists,please login or signup with a different email
//if (no user in database with this email)
//hash the password+salt
//create the new user(with the given name,email and hash password)
response with a message registered successfully
*/
const registerUser = (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user
      .save()
      .then((result) => {
        res.status(201).send({
          message: "User Registered successfully",
          result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error creating user",
          error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Password not created successfully",
      error,
    });
  }
};
module.exports = registerUser;
