import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterCourse from '../components/FilterCourse';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

// const TypeOfCourseUser = 'FREE';
const Free_Course_Page = () => {
  const [Courses,setCourses]=useState([]);
  useEffect(()=>{
      const getFreeCourse = async ()=> {
        try {
          const res = await axios.get("http://localhost:3700/freeCourse");
          setCourses(res.data);
        } catch (error) {
          console.log(error)
        }
      }
      getFreeCourse()
  })

  return (
    <div>
      <Navbar/>
      <FilterCourse/>

<div className="h-fit justify-items-center  bg-slate-300 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
       
        {Courses.map((course) => {
        return  <CourseCard course = {course} />;
          // console.log(course.CourseLevel);
        })}

        
      </div>

      <Footer/>
    </div>
  )
}

export default Free_Course_Page
