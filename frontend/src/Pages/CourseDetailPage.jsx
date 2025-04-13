import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseDetail from '../components/CourseDetail'
import { useParams } from 'react-router'
import axios from 'axios'


const CourseDetailPage = () => {
    const param = useParams();
    console.log(param);

    const [filteredCourse,setFilteredCourse] = useState();    /* [] empty array is not given because it param contain the unique id  */
    useEffect(()=>{
        const getFilteredCourse = async()=>{
            try {
                const res = await axios.get(`http://localhost:3700/CourseDetail/${param.courseID}`)
                setFilteredCourse(res.data);
            } catch (error) {
                console.log(error);
            }
           
        }
        getFilteredCourse();
    },[])

  return (
    <div>
      <Navbar/>

<CourseDetail course={filteredCourse}/>


    </div>
  )
}

export default CourseDetailPage
