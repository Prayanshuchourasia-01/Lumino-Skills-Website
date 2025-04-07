import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Course from "./models/courseSchema.js";
dotenv.config();


const app = express();
const port = process.env.PORT || 4000 ; /* Express Server Port Number  */ 
// const mongoDbUrl =`mongodb+srv://${process.env.MONGO_DB_USERNAME2}:${process.env.MONGO_DB_PASSWORD2}@lumino-skills.z2jq2.mongodb.net/?retryWrites=true&w=majority&appName=Lumino-Skills`
const DbUrl = process.env.MONGO_DB_URL; /* Mongo Db connection Url here */

app.use(express.json());



/* Routes defined here */
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
}); 

app.post('/uploadCourse',async(req,res)=>{
    try {
        const course  = await Course.create(req.body)
        res.status(200).json(course);


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



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