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
				res.redirect("/users")
			}
		})
	})


router.route("/:id/edit")
	.get((req, res) => {
		User.findById(req.params.id, (err, foundUser) => {
			if (err) {
				console.log(err)
			} else {
				res.render("users/edit.ejs", {
					user: foundUser
				})
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
	.delete((req, res) => {
		User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
			if (err) {
				console.log(err)
			} else {
				res.redirect("/users")
			}
		})
	})
	.put((req, res) => {
		User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
			if (err) {
				console.log(err)
			} else {
				res.redirect("/users/" + req.params.id)
			}
		})
	})










module.exports = router;