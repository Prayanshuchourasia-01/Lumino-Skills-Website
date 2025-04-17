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
  },
  {
    "_id": "67fbc03caf81fd9bd0ef93f9",
    "title": "Frontend Domination - create Anything with code",
    "price": 3999,
    "description": "Domin8 the web game with 'Front-End Domination.'! Nail HTML, CSS, JS, and Solve real problems, dive into fun projects, and be interview-ready!",
    "imageURL": "https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg",
    "CourseLink": "https://www.sheryians.com/courses/courses-details/Front-End%20Domination:%20Create%20Anything%20with%20Code",
    "tag": "Web Development",
    "typeOfCourse": "PAID",
    "CourseLevel": "Beginner",
    "createdAt": "2025-04-13T13:46:36.911Z",
    "updatedAt": "2025-04-13T13:46:36.911Z",
    "__v": 0
},
{
  "_id": "67fbc057af81fd9bd0ef93fb",
  "title": "Backend Domination - Create Scalable & Secured Backend.",
  "price": 3999,
  "description": "Ready to rule the digital world? Learn to build powerful back-ends that drive websites and apps smoothly. From databases to security, we cover it all.",
  "imageURL": "https://ik.imagekit.io/sheryians/courses_gif/undefined-backend_0.5x_Medium_wgHDU-5rPt.png",
  "CourseLink": "https://www.sheryians.com/courses/courses-details/Back-End%20Domination:%20Create%20Efficient%20Back-End.",
  "tag": "Web Development",
  "typeOfCourse": "PAID",
  "CourseLevel": "Beginner",
  "createdAt": "2025-04-13T13:47:03.959Z",
  "updatedAt": "2025-04-13T13:47:03.959Z",
  "__v": 0
},
  
{
  "_id": "67fbc064af81fd9bd0ef93fd",
  "title": "Java & DSA Domination : Crack MAANG Companies.",
  "price": 4999,
  "description": "Ace your coding interviews! Master Java and DSA with our expert-led course, packed with interactive lessons and practice tests.",
  "imageURL": "https://ik.imagekit.io/sheryians/java&dsa/javaas%20Large_jY0Wighav.jpeg",
  "CourseLink": "https://www.sheryians.com/courses/courses-details/Java%20&%20DSA%20Domination",
  "tag": "Java",
  "typeOfCourse": "PAID",
  "CourseLevel": "Beginner",
  "createdAt": "2025-04-13T13:47:16.215Z",
  "updatedAt": "2025-04-13T13:47:16.215Z",
  "__v": 0
},
  
{
  "_id": "67fbc06eaf81fd9bd0ef93ff",
  "title": "Job Ready AI Powered Cohort: Complete Web Development + DSA + Aptitude",
  "price": 5999,
  "description": "MERN Stack, A Placement Focus, DSA With JS, Aptitude Focus, Ai Powered",
  "imageURL": "https://ik.imagekit.io/sheryians/Job%20Ready%20Live%20Batch/IMG_5100_G2afyBQKH.JPG?updatedAt=1735827470404",
  "CourseLink": "https://www.sheryians.com/courses/courses-details/Java%20&%20DSA%20Domination",
  "tag": "Web Development",
  "typeOfCourse": "PAID",
  "CourseLevel": "Beginner",
  "createdAt": "2025-04-13T13:47:26.762Z",
  "updatedAt": "2025-04-13T14:11:10.257Z",
  "__v": 0
}
]
export default function PopularCourse() {
  // const [popCourse,setPopCourse]=useState([]);
  
  return (
    
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl text-white font-bold text-center mb-10">🔥 Explore Our Courses</h2>
      {/* <div className="flex flex-wrap justify-center gap-8 mb-10"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mb-10">
       

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
