import React, { useState } from 'react'
import CourseCard from './CourseCard';
import { Link } from 'react-router'

const selectedCourse = [
  {
      "_id": "67f4050e8e8c0ad24a8500a4",
      "title": "Complete web development course",
      "price": 3099,
      "description": "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
      "imageURL": "https://img-c.udemycdn.com/course/750x422/6035102_7d1a.jpg",
      "CourseLink": "https://www.udemy.com/course/web-dev-master/",
      "tag": "Web Development",
      "typeOfCourse": "PAID",
      "CourseLevel": "Beginner",
      "createdAt": "2025-04-07T17:02:06.634Z",
      "updatedAt": "2025-04-10T05:13:43.194Z",
      "__v": 0
  },
  {
      "_id": "67f757e64d8db4b5ace12417",
      "title": "100 Days of Code: The Complete Python Pro Bootcamp",
      "price": 3299,
      "description": "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps! Created By Dr. Angela Yu, Developer and Lead Instructor",
      "imageURL": "https://i.ytimg.com/vi/lD1lk8YRXpw/maxresdefault.jpg",
      "CourseLink": "https://www.udemy.com/course/100-days-of-code/",
      "tag": "Python",
      "typeOfCourse": "PAID",
      "CourseLevel": "Beginner",
      "createdAt": "2025-04-10T05:32:22.304Z",
      "updatedAt": "2025-04-10T05:32:22.304Z",
      "__v": 0
  }
]
export default function PopularCourse() {
  const [popCourse,setPopCourse]=useState([]);
  
  return (
    
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl text-white font-bold text-center mb-10">🔥 Explore Our Courses</h2>
      {/* <div className="flex flex-wrap justify-center gap-8 mb-10"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mb-10">
       

        {selectedCourse.map((course)=>{
          return <CourseCard course={course}/>
        })}
        {selectedCourse.map((course)=>{
          return <CourseCard course={course}/>
        })}
        {selectedCourse.map((course)=>{
          return <CourseCard course={course}/>
        })}
       
      </div>
      <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-md">
       <Link to={'/categories'} >Explore Courses</Link>
       
      </button>
    </div>
   
  )
}
