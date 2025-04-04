import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


const app = express();
const port = process.env.PORT || 4000 ; /* Express Server Port Number  */ 
// const mongoDbUrl =`mongodb+srv://${process.env.MONGO_DB_USERNAME2}:${process.env.MONGO_DB_PASSWORD2}@lumino-skills.z2jq2.mongodb.net/?retryWrites=true&w=majority&appName=Lumino-Skills`
const DbUrl = process.env.MONGO_DB_URL; /* Mongo Db connection Url here */


/* Routes defined here */
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
}); 



// console.log("Here is it ")

                                /* Server and MongoDb Connection Establishment here */

mongoose.connect(DbUrl)
.then(()=>{
    console.log("Connected to MongoDb ");
    app.listen(port,()=>{
        console.log(`Server is running on the ${port}`);
    })
}).catch((error)=>{
    console.log(error);
})