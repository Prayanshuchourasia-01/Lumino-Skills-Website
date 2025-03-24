import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    price:{
        type:'number',
        required:true
    }
})