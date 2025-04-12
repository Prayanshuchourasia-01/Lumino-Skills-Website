import React, { useState } from 'react'
import CourseCard from './CourseCard';
import { Link } from 'react-router'

const selectedCourse = {
  title: "Complete web development course",
  price: "3099",
  description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
  CourseLink: "https://www.udemy.com/course/web-dev-master/",
  imageURL: "https://img-c.udemycdn.com/course/750x422/6035102_7d1a.jpg",
  tag: "Web Development",
  typeOfCourse: "PAID",
  CourseLevel: "Beginner",
  createdAt: "2025-04-07T17:02:06.634Z",
  updatedAt: "2025-04-10T05:13:43.194Z"
};
export default function PopularCourse() {
  const [popCourse,setPopCourse]=useState([]);
  
  return (
    
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl text-white font-bold text-center mb-10">🔥 Explore Our Courses</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <CourseCard course={selectedCourse} />
        <CourseCard course={selectedCourse}/>
        <CourseCard course={selectedCourse}/>
       
      </div>
      <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-md">
       <Link to={'/categories'} >Explore Courses</Link>
       
      </button>
    </div>
   
  )
}
