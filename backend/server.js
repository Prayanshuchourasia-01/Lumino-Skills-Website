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


// Fetching data from the default route 
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
}); 

// Fetching All Courses From database by this Route 
app.get('/allCourses',async(req, res)=>{
    try {

        const Allcourses = await Course.find({});
        res.status(200).json(Allcourses);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

// Fetching Tag Based Courses And Filtering out from all the courses given in the database. 
app.get('/Courses/:tag',async(req, res)=>{
    try {
        const tagName = req.params.tag ; 
        const course = await Course.find({tag: { $in: [tagName] }})    
        res.status(200).json(course);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


// Posting Course Data in the Database From This route 
app.post('/uploadCourse',async(req,res)=>{
    try {
        const course  = await Course.create(req.body);
        res.status(200).json(course);
        console.log("Course is uploaded");

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// Update the data from the database by filtering out id of the course from this route.

app.put('/updateCourseDetail/:id',async(req,res)=>{
    try {
        const courseId = req.params.id;
        const course = await Course.findByIdAndUpdate(courseId, req.body);

        // console.log(courseId);
        
        // cant find the course in database
        if(!course){
            return res.status(404).json({message:`can't find any course with ${courseId}`})
        }
        const updatedDetails = await Course.findById(courseId);
        res.status(200).json(updatedDetails);
        console.log("Course is Updated");

    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

// Delete the data from the database by filtering out id of the course from this route. 

app.delete('/deleteCourse/:id',async(req,res)=>{
   try {

    const courseId = req.params.id ;
    // console.log(couresId);
    const course =  await Course.findByIdAndDelete(courseId);
    if(!course){
        res.status(404).json({message:`course not found of this id : ${courseId}`})
    }
    res.status(200).json(course)
    console.log("Course is Deleted");
    
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})





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