const express = require("express");
const router = express.Router();
const user = require("../controller/user.controller");
const { verifyToken } = require("../middelware/JWT");

router.route("/register").post(user.register);
router.route("/update").post(verifyToken, user.updateUser);
router.route("/delete").post(verifyToken, user.deleteUser);
router.route("/getuser").post(verifyToken, user.getUser);

module.exports = router;
