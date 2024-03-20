const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/login.controller");
const { verifyToken } = require("../middelware/JWT");

router.route("/login").post(authcontroller.login);
router.route("/logout").post(verifyToken, authcontroller.logout);

module.exports = router;
