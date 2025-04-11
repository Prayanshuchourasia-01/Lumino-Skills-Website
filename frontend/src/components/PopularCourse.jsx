import React from 'react'
import CourseCard from './CourseCard'

export default function PopularCourse() {
  return (
   
        
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl text-white font-bold text-center mb-10">🔥 Explore Our Courses</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <CourseCard />
        <CourseCard />
        <CourseCard/>
       
      </div>
      <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-md">
        Explore Courses
      </button>
    </div>
   
  )
}
