const dotenv = require('dotenv');

dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

mongoose.connect(process.env.MONGO_URI,
	{useNewUrlParser: true, 
	useUnifiedTopology: true}
).then(() => {
	console.log("DB Connection Successful!");
}).catch((err) => {
	console.log(err);
});

app.use(express.json());
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running!");
});