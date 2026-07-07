const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// cors is used for connecting client side to server side , as they are running on different ports
app.use(cors());
app.use(express.json());
dotenv.config();

// importing Routes from routes folder
const taskRoutes = require("./routes/taskRoutes");

//getting data from .env file
const port = process.env.PORT;
const MONGO_URL = process.env.URL;


// Middleware used for routing 
app.use("/api/tasks",taskRoutes);

//connection with db 
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Server connected to db")
    
    app.listen(port , ()=>{
    console.log("Server is listening on port ",port);

})
})
.catch((err)=> console.log("Error : ", err.message));


