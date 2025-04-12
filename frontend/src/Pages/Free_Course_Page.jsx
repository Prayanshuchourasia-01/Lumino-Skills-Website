import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterCourse from '../components/FilterCourse';
import axios from 'axios';

// const TypeOfCourseUser = 'FREE';
const Free_Course_Page = () => {
  const [Course,setCourses]=useState([]);
  useEffect(()=>{
      const getFreeCourse = async ()=> {
        try {
          const res = await axios.get("http://localhost:3700/freeCourse");
          setCourses(res.data);
        } catch (error) {
          console.log(error)
        }
      }
  })

  return (
    <div>
      <Navbar/>
      <FilterCourse/>
      
      <Footer/>
    </div>
  )
}

export default Free_Course_Page
