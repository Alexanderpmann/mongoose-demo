// we need mongoose
const mongoose = require("mongoose");

// we need to connect to our database
mongoose.connect("mongodb://localhost/july_2022_mongo_demo", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(() => console.log("I found the mongoose!"))
    .catch(err => console.log("I lost the mongoose!", err));