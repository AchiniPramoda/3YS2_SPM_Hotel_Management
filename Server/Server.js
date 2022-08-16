const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true  
}));
app.use(cors());

Port = process.env.PORT;
Url = process.env.URL;

mongoose.connect(Url, () => {
    useNewUrlParser = true,
    useUnifiedTopology = true
});

const connected = mongoose.connection;
connected.once("open", () => {
    console.log("Mongo DB Connected..");
});

app.listen(Port, () => {
    console.log("Port No : " + Port);
});

const staff = require('./route/Staff_route');
app.use('/staff', staff);

const Register = require('./routes/user.route.management');
app.use('/register',Register);

const  login = require('./routes/login.route.management');
app.use('/login', login);



