import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories_Display from '../components/CategoriesDisplay';
import axios from 'axios'
import CourseCard from '../components/CourseCard'
import { ScrollToTop } from '../components/ScrollToTop';



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
      <ScrollToTop/>
      <Navbar/>
      {/* <FilterCourse/> */}
      <Categories_Display/>
      <h2 className='text-center text-3xl font-mono font-bold p-4'>All Courses Categories</h2>
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
