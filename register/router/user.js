const express = require("express");
const router = express.Router();
const { register } = require("../controller/user");
router.route("/").post(register);

module.exports = router;
