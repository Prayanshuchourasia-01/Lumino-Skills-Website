import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


const app = express();
const port = process.env.PORT || 4000 ;
const mongoDbUrl = process.env.MONGO_DB_URL ; 


app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
}); 



app.listen(port,()=>{
    console.log(`Server is running on the ${port}`);
})


// mongoose.connect(mongoDbUrl)