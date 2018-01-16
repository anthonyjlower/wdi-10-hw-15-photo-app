const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog", {
	useMongoClient: true
});

mongoose.connection.on("connected", () => {
	console.log("Mongodb is connected")
})

mongoose.connection.on("disconnected", () => {
	console.log("Mongodb is disconnected")
})

mongoose.connection.on("error", (error) => {
	console.log("Error connecting -- ", error)
})

