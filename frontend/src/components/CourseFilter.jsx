import React, { useState } from "react";

export default function CourseFilter() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
    console.log("Selected:", value);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">LUMINO SKILLS</h1>
        <ul className="flex gap-6 text-sm">
          <li>Home</li>
          <li>Free Course</li>
          <li>Paid Course</li>
          <li>|</li>
          <li>Categories</li>
        </ul>
        <button className="bg-white text-black px-4 py-2 rounded-lg shadow">Contact</button>
      </nav>

      {/* Title */}
      <h2 className="text-center text-3xl font-bold my-10">Choose</h2>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-8 px-16 text-sm">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {['Python', 'Web Development', 'C++', 'Java', 'C'].map((label) => (
            <label key={label}>
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(label)}
              />
              {label}
            </label>
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          {['Cloud Computering', 'Android dev', 'BlockChain', 'HTML', 'CSS'].map((label) => (
            <label key={label}>
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(label)}
              />
              {label}
            </label>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {['Cloud Computering', 'Android dev', 'BlockChain', 'HTML', 'CSS'].map((label, index) => (
            <label key={label + index}>
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(label)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Bottom Filters */}
      <div className="grid grid-cols-2 gap-8 px-16 mt-16">
        {/* Levels */}
        <div className="flex flex-col gap-4">
          {['Beginners', 'Intermediate', 'Expert'].map((label) => (
            <label key={label}>
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(label)}
              />
              {label}
            </label>
          ))}
        </div>

        {/* Upcoming Topics */}
        <div className="flex flex-col gap-4">
          {['DevOps (Upcoming)', 'Artificial intelligence (Upcoming)', 'Machine Learning (Upcoming)'].map((label) => (
            <div key={label} className="flex items-center">
              <span className="text-xl font-bold text-black bg-white px-2 mr-2">X</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
