import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold">LUMINO SKILLS</h1> */}
        <h1 className="text-xl font-bold [word-spacing:0.3rem] tracking-[2.5px] ml-24 text-white font-customFont lg:ml-8 md:ml-12 max-sm:ml-1  sm:ml-12">LUMINO SKILLS</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center mr-9">

          <li className="cursor-pointer hover:text-blue-500">
            <Link to={'/'} refresh="true">Home</Link>
             </li>

          <li className="cursor-pointer hover:text-blue-500">
            <Link to={'/freeCourse'}refresh="true">Free Course</Link>
          </li>

          <li className="cursor-pointer hover:text-blue-500">
            <Link to={'/paidCourse'} refresh="true">Paid Course</Link>
          </li>

          <li className="text-gray-500 select-none">|</li>

          <li className="cursor-pointer hover:text-blue-500">
            <Link to={'/categories'} refresh="true">Categories</Link>
          </li>

        {/* Contact Button */}
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg shadow">
          <Link to={'/contact'} refresh="true">Contact</Link>
        </button>


        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-3 border-t border-gray-700">
          <div className="flex flex-col gap-3 text-sm">
            <span className="cursor-pointer hover:text-gray-300"><Link to={'/'}>Home</Link></span>
            <span className="cursor-pointer hover:text-gray-300"> <Link to={'/freeCourse'}>Free Course</Link></span>
            <span className="cursor-pointer hover:text-gray-300"><Link to={'/paidCourse'}>Paid Course</Link></span>
            {/* <span className="text-gray-500">|</span> */}
            <span className="cursor-pointer hover:text-gray-300"><Link to={'/categories'}>Categories</Link></span>
          </div>
          
          <Link className="mt-4 bg-white text-black px-4 py-2 rounded-lg shadow w-full" to={'/contact'}>Contact</Link>
         
        </div>
      )}
    </div>
  );
};

export default Navbar;