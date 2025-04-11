import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterCourse from '../components/FilterCourse';

const TypeOfCourseUser = 'FREE';
const Free_Course_Page = () => {
  return (
    <div>
      <Navbar/>
      <FilterCourse/>
      
      <Footer/>
    </div>
  )
}

export default Free_Course_Page
