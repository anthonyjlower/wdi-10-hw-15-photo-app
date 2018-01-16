const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userName: String,
	email: String,
	lastPost: Date
})

module.exports = mongoose.model("User", userSchema);
