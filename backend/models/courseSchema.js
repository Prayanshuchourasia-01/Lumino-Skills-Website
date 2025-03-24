import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
    {
    name:{
        type:'String',
        required:true
    },
    price:{
        type:'Number',
        required:true
    },
    description:{
        type:'String',
        required:true
    },
    link:{
        type:'String',
        required:true
    },
    tag:{
        type:'String',
        required:true
    }
},
{
    Timestamp:true
}
)