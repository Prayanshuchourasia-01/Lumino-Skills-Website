import React from 'react'
import { useState } from "react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Free Course", href: "/freeCourse" },
  { name: "Paid Course", href: "/paidCourse" },
  { name: "Categories", href: "/categories" },
  // { name: "Contact", href: "/contact" },
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
   
    <nav className="bg-black shadow-md pt-3 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold [word-spacing:0.3rem] tracking-[2.5px] text-white font-customFont">LUMINO SKILLS</div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  
   
   </>
  )
}

export default Navbar
