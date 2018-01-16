const express = require('express');
const router = express.Router();
const User = require("../models/user.js");






router.route("/new")
	.get((req, res) => {
		res.render("users/new.ejs")
	})


router.route("/")
	.get((req, res) => {
		User.find({}, (err, foundUsers) => {
			res.render("users/index.ejs", {
				users: foundUsers
			})
		})
	})
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



router.route("/:id")
	.get((req, res) => {
		User.findById(req.params.id, (err, foundUser) => {
			if (err) {
				console.log(err)
			} else {
				res.render("users/show.ejs", {
					user: foundUser
				})
			}
		})
	})










module.exports = router;