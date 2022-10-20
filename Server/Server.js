const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');


const cookieParser = require('cookie-parser')
const path = require('path')
const payment = require('./routes/payment');


const fileupload = require('express-fileupload')
//const fileupload = require("express-fileupload");


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
app.use(fileupload());




app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/pakageRouter'))
app.use('/payment',payment);



Port = process.env.PORT;
Url = process.env.URL;

mongoose.connect(Url, () => {
    useNewUrlParser = true
  
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

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }

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

const RestaurantManagement = require("./routes/restaurant_management");
app.use("/api/restaurants", RestaurantManagement);

const CategoryManagement = require("./routes/categoryRouter1");
app.use("/api", CategoryManagement);

const FoodManagement = require("./routes/foodRouter");
app.use("/api", FoodManagement);

// const UploadManagement = require("./routes/upload");
// app.use("/api", UploadManagement);
app.use('/api', require('./routes/upload'))
app.use(express.json());
app.use('/payment', require('./routes/payment'))

app.use('/static', express.static(path.join(__dirname, 'public')))

// app.use('/api', require('./routes/categoryRouter'))
// //app.use('/api', require('./routes/upload'))
// app.use('/api', require('./routes/foodRouter'))


