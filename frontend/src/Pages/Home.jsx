import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PopularCourse from '../components/PopularCourse'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import CourseView from '../components/CourseView'
import CourseDetail from '../components/CourseDetail'

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
export default function Home() {
  return (
    <div className='w-full'>

    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
   {/* <CourseDetail course={selectedCourse}/> */}
    <PopularCourse/>
    <Footer/>    


    </div>

    
  )
}
