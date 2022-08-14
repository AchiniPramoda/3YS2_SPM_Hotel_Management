
const nodemailer = require("nodemailer");
require("dotenv").config();
//const dotenv = require('dotenv')
module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port:process.env.EMAIL_PORT,
			secure: process.env.SECURE,
			auth:{
				user: process.env.USER,
				pass: process.env.PASS
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
        //console.log(process.env.HOST + " " + process.env.USER +" " +  process.env.PASS);
		console.log(error);
		return error;
	}
}