import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterCourse from "../components/FilterCourse";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import Categories_Display from '../components/CategoriesDisplay';
import { ScrollToTop } from "../components/ScrollToTop";

// const selectedCourse = {
//   title: "Complete web development course",
//   price: "3099",
//   description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
//   CourseLink: "https://www.udemy.com/course/web-dev-master/",
//   imageURL: "https://img-c.udemycdn.com/course/750x422/6035102_7d1a.jpg",
//   tag: "Web Development",
//   typeOfCourse: "PAID",
//   CourseLevel: "Beginner",
//   createdAt: "2025-04-07T17:02:06.634Z",
//   updatedAt: "2025-04-10T05:13:43.194Z"
// };


const Paid_Course_Page = () => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    const getPaidCourse = async () => {
      try {
        const res = await axios.get("http://localhost:3700/paidCourse");
        setCourses(res.data); 
      } catch (error) {
        console.log(error);
      }
    };
    getPaidCourse();
  }, []);

  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      {/* <FilterCourse /> */}
      <Categories_Display/>
      
      <div className="h-fit justify-items-center  bg-slate-300 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
       
        {Courses.map((course) => {
        return  <CourseCard course = {course} />;
          // console.log(course.CourseLevel);
        })}

        
      </div>

      <Footer />
    </div>
  );
};

export default Paid_Course_Page;
