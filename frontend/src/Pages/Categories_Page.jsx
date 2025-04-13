import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterCourse from '../components/FilterCourse'
import axios from 'axios'
import CourseCard from '../components/CourseCard'

const Categories_Page = () => {
  const [AllCourses,setAllCourses] = useState([]);
  useEffect(()=>{
    const getAllCourses = async() =>{
      try {
        const res = await axios.post("http://localhost:3700/categories");
        setAllCourses(res.data)
      } catch (error) {
        console.log(error)
      }
    };
   getAllCourses();
  },[])
  return (
    <div>
      <Navbar/>
      <FilterCourse/>

 <div className="h-fit justify-items-center  bg-slate-300 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
       
        {AllCourses.map((course) => {
        return  <CourseCard key = {course._id} course = {course} />;
          console.log(course.CourseLevel);
        })}
        {/* {AllCourses.map((course) => {
        return  <CourseCard course = {course} />;
          // console.log(course.CourseLevel);
        })}
        {AllCourses.map((course) => {
        return  <CourseCard course = {course} />;
          // console.log(course.CourseLevel);
        })} */}

        
      </div>
      
      <Footer/>
    </div>
  )
}

export default Categories_Page
