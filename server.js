const express = require("express");
const app = express();

require("./db/db.js")





// Homepage Route
app.get("/", (req, res) => {
	res.render("index.ejs")
})


app.listen(3000, () => {
	console.log("Listening on port 3000")
})