require("dotenv").config();
const express = require("express");
const authControllers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

//Home of Auth Route :
router.route("/").get(authControllers.home);

//Register Route :
router.route("/register").post(authControllers.register);

//Login Route :
router.route("/login").post(authControllers.login);

//user Route :
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
