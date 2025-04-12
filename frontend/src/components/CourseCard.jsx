import React, { useState } from "react"


export default function CourseCard(props) {
    // const isPaid = course.typeOfCourse;
    console.log({props})
    let {course} = props;
  return (
    
    <div className="bg-white text-black mt-8 mb-8 p-6 rounded-lg shadow-md border-2 flex flex-col justify-between w-[350px]">
      {/* Course Image */}
      <img
        src={course.imageURL}
        alt={course.title}
        className="h-40 w-full object-cover rounded mb-4"
      />

      {/* Category */}
      <div className="inline-flex gap-4">
      <p className="text-sm text-gray-700 font-medium">{course.tag} </p>
      <p className="text-sm text-gray-700 font-medium">{course.typeOfCourse} </p> {/* In this i have to show whether the course is PAID or FREE and more Style will be added */}
      </div>
     

      {/* Title + External Link Icon */}
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        {/* <span className="text-lg">↗</span> */}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">{course.description} </p>

      {/* Footer Buttons */}
      <div className="mt-6 flex items-center justify-between">
        <button className="bg-gray-200 text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-300 transition">
          View
        </button>
        
      </div>
    </div>
  )
}

