const express = require('express');
const router = express.Router();
const User = require("../models/user.js");






router.route("/new")
	.get((req, res) => {
		res.render("users/new.ejs")
	})


router.route("/")
	.post((req, res) => {
		User.create(req.body, (err, createdUser) => {
			if (err) {
				console.log(err)
			} else {
				console.log("Posted")
				res.send(createdUser)
			}
		})
	})














module.exports = router;