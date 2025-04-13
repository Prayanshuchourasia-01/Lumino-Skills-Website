import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-white text-black  max-w-full 2xl:m-[20px] xl:ml-7  xl:mr-7 xl:mt-7 lg:m-5 md:m-3 sm:m-6 mb-0">
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-2 font-customFont">
            Navigate your learning <span className="inline-block">💪</span>
          </h2>
          <p className="text-3xl font-bold font-customFont leading-[40px] ">
            journey with clarity and <br /> purpose.
          </p>
        </div>
        <button className="bg-black text-white px-[4em] py-3 rounded-full font-semibold hover:bg-gray-800" >
          Contact Us.
        </button>
      </div>

      <hr className="my-10 border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div className='mr-4'>
          <h3 className="font-bold mb-5">About Lumino Skill</h3>
          <p className="text-gray-600 leading-relaxed">
            At Lumino Skills, we simplify your journey to self-improvement by
            connecting you with curated courses tailored to your goals. Our
            mission is to empower learners with trusted recommendations and
            seamless exploration.
          </p>
          <div className="flex mt-4 space-x-4 text-xl text-gray-600">
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaGithub className="hover:text-black cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/freeCourse'}>Free Course</Link></li>
            <li><Link to={'/paidCourse'}>Paid Course</Link></li>
            <li><Link to={'/categories'}>Category</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-5">Help</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-5">UpComing Features</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Login and Signup</li>
            <li>More Courses</li>
            <li>More Domains</li>
          </ul>
        </div>
      </div>
      <p className='pt-8'>Copyright © 2025 Lumino Skills. Licensed under the MIT License. All rights reserved. <strong>Developed By Prayanshu Chourasia</strong></p>
    </div>
  </footer>
  )
}

export default Footer
