import React, { useState } from "react"

export default function CourseCard({ course }) {
    // const isPaid = course
  return (
    <div className="bg-white text-black mt-8 mb-8 p-6 rounded-lg shadow-md border-2 flex flex-col justify-between w-[350px]">
      {/* Course Image */}
      <img
        // src={course.image}
        // alt={course.title}
        className="h-40 w-full object-cover rounded mb-4"
      />

      {/* Category */}
      <p className="text-sm text-gray-700 font-medium">{/*course.category*/} hehgg</p>

      {/* Title + External Link Icon */}
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-lg font-semibold">{/*course.title*/}Ui/UX design</h3>
        {/* <span className="text-lg">↗</span> */}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">{/*course.description*/} Loretationem quae voluptate minima cupiditate similique, et, quisquam aspernatur corporis a consectetur nisi asperiores accusamus voluptas?</p>

      {/* Footer Buttons */}
      <div className="mt-6 flex items-center justify-between">
        <button className="bg-gray-200 text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-300 transition">
          View
        </button>
        { (
          <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full rounded-l-none">
            PAID
          </span>
        )
        }
      </div>
    </div>
  )
}