import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
    {
    name:{
        type:'String',
        required:true
        // name spelling limit can be 15 or 20 letter 
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
    link:{
        type:'String',
        required:true
        // url of the course 
    },
    tag:{
        type:'String',
        required:true
        // tag are needed to filter out the courses to show the user
    },
    typeOfCourse:{
        type:'String',
        required:true
        // in these tell which type of course it is , either free or paid || beginner or intermediate or expert.
    }
},
{
    timestamp:true
}
)

const Course = mongoose.model('Course',courseSchema) ;

export default Course ; 