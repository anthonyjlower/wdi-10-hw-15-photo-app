const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

require("./db/db.js")


/* -------
Middleware
-------- */
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(methodOverride("_method"));

app.use(express.static("public"));




const userController = require("./controllers/userController.js");
app.use("/users", userController);


// Homepage Route
app.get("/", (req, res) => {
	res.render("index.ejs")
})


app.listen(3000, () => {
	console.log("Listening on port 3000")
})