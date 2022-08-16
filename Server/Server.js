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

const Hall = require('./routes/hall_management.route');
app.use('/hall', Hall);


const Room = require('./routes/room_management.route');
app.use('/room', Room);

const staff = require('./routes/Staff_route');
app.use('/staff', staff);

const Register = require('./routes/user.route.management');
app.use('/register',Register);

const  login = require('./routes/login.route.management');
app.use('/login', login);



