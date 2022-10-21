// // Import dependencies
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");
// const fileupload = require("express-fileupload");

// dotenv.config();

// // Port Number declaration
// const PORT = process.env.PORT;

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(fileupload());
// app.use(cors());

// // Import routes

// const RestaurantManagement = require("./routes/restaurant_management");


// // Connecting to mongo db
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true
// });

// const connection = mongoose.connection;
// connection.once("open", function () {
//     console.log("MongoDb connection established successfully!");
// });

// // Use routes

// app.use("/api/restaurants", RestaurantManagement);

// // Starting the server
// app.listen(PORT, () => {
//     console.log("server is running on Port : " + PORT);
// });