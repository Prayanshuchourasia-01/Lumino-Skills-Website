import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
    {
    title:{
        type:'String',
        required:true
        // title spelling limit can be 40-60 letter 
    },
    price:{
        type:'Number',
        required:true
        // can be zero 

    },
    description:{
        type:'String',
        required:true
        // limit upto 200 letters 
    },

    imageURL: {
        type:'String',
        required:true
        // URL for course image
    },
    CourseLink:{
        type:'String',
        required:true
        // url of the course 
    },
    tag:{
        type:'String',
        required:true
        //some of the Demo tags are : Python , Html , Css , Js , Java , C++ , Perl , ReactJs , NodeJs , ExpressJs , MongoDb .. etc 
        // tag are needed to filter out the courses to show the user
    },
    typeOfCourse:{
        type:'String',
        required:true
        // in these tell which type of course it is , either free or paid || beginner or intermediate or expert.
    },
    CourseLevel:{
        type:"String",
        required:true
        // in This There will be 3 levels - Beginnners , intermidiate , expert 
    }
},
{
    timestamps:true
}
)

const Course = mongoose.model('Course',courseSchema) ;

export default Course ; 