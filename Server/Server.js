const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true  
}));

app.use(fileUpload({
    useTempFiles: true
}))

app.use(cookieParser())
app.use(cors());
//app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/pakageRouter'))
// app.use('/api', require('./routes/paymentRouter'))


Port = process.env.PORT;
Url = process.env.URL;

mongoose.connect(Url, () => {
    useNewUrlParser = true,
    useUnifiedTopology = true
});

const connected = mongoose.connection;
connected.once("open", () => {
    console.log("MongoDB connection Connected...");
});

app.listen(Port, () => {
    console.log("Port No : " + Port);
})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}




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



