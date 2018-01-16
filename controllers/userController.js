const express = require('express');
const router = express.Router();
const User = require("../models/user.js");






router.route("/new")
	.get((req, res) => {
		res.render("users/new.ejs")
	})












module.exports = router;