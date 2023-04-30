const express = require("express");

const router = express.Router();

//here I will add my controllers
const register = require("../controllers/register");
const login = require("../controllers/login");

//underneath are the methods for register and login
router.post("/register", register);
router.post("/login", login);
module.exports = router;
