const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

//REGISTER
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSPHRASE).toString()
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser)
	}catch(err) {
		res.status(500).json(err);
	}
	
});

// LOGIN
router.post("/login", async(req, res) => {
	try {
		const user = await User.findOne({username: req.body.username});
		!user && res.status(401).json("Wrong credentials");
		
		const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASSPHRASE);
		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		OriginalPassword !== req.body.password && res.status(401).json("Wrong Credentials2");

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin
			},
			process.env.JWT_SECRET,
			{expiresIn: '3d'}
		);

		const { password, ...others } = user._doc;
		res.status(200).json({...others, accessToken});
	}catch(err) {
		res.status(500).json(err);
	}
})

module.exports = router;