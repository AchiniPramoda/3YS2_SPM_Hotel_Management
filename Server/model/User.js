const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { 
        type: String,
         required: true 
    },
	lastName: { 
        type: String,
         required: true 
    },
	email: { 
        type: String,
         required: true 
    },
	password: { 
        type: String, 
        required: true 
    },
//    gender:{
//         type: String, 
//         required: true 
//     },
    city:{
        type: String,
        required: true
    },
    // type:{
    //     type: String, 
    //     required: true 
    // },
        
        verfied:{type:Boolean,default:false}
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(3).max(255).required(),
        // gender: Joi.string().min(3).max(50).required(),
        city: Joi.string().min(3).max(50).required(),
        // type: Joi.string().min(3).max(50).required(),

	});
	return schema.validate(data);
};

module.exports = { User, validate };