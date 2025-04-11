// import React from 'react';

// const CourseDetail = ({ course }) => {
//   if (!course) {
//     return (
//       <div className="text-white text-center py-20">
//         <h2 className="text-2xl font-bold">No Course Selected</h2>
//         <p className="text-gray-400 mt-2">Please choose a course to view details.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-black text-white min-h-screen px-6 md:px-20 py-10">
//       {/* Banner */}
//       <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden shadow mb-10">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       {/* Course Info */}
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
//         <p className="text-gray-400 text-sm mb-6">by {course.instructor}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {course.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-gray-700 px-3 py-1 rounded-full text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-gray-200 leading-relaxed mb-8">
//           {course.description}
//         </p>

//         {/* Skills and Level */}
//         <div className="grid sm:grid-cols-2 gap-6 mb-10">
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Skills Covered:</h4>
//             <ul className="list-disc list-inside text-gray-300">
//               {course.skills.map((skill, idx) => (
//                 <li key={idx}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Level:</h4>
//             <p className="text-gray-300">{course.level}</p>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex flex-wrap gap-4">
//           <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
//             Enroll Now
//           </button>
//           <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
//             Save for Later
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;



// import React from 'react';

// const CourseDetail = ({ course }) => {
//   if (!course) {
//     return (
//       <div className="text-white text-center py-20">
//         <h2 className="text-2xl font-bold">No Course Selected</h2>
//         <p className="text-gray-400 mt-2">Please choose a course to view details.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white px-4 md:px-20 py-10">
//       <div className="max-w-5xl mx-auto">
//         {/* Course Image */}
//         <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg">
//           <img
//             src={course.imageURL}
//             alt={course.title}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* Title + Tag */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//           <div>
//             <h1 className="text-3xl font-bold">{course.title}</h1>
//             <p className="text-sm text-gray-400 mt-2">{course.tag}</p>
//           </div>

//           <span
//             className={`mt-4 md:mt-0 text-xs font-semibold px-3 py-1 rounded-full 
//               ${course.typeOfCourse === 'PAID' ? 'bg-red-600' : 'bg-green-600'}`}
//           >
//             {course.typeOfCourse}
//           </span>
//         </div>

//         {/* Description */}
//         <p className="text-gray-300 leading-relaxed mb-6">
//           {course.description}
//         </p>

//         {/* Level + Price */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
//           <div>
//             <h4 className="font-semibold text-lg">📚 Level: <span className="text-gray-300">{course.CourseLevel}</span></h4>
//           </div>
//           <div>
//             <h4 className="font-semibold text-lg">
//               💰 Price: <span className="text-gray-300">₹{course.price}</span>
//             </h4>
//           </div>
//         </div>

//         {/* Action Button */}
//         <a
//           href={course.CourseLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 font-semibold transition"
//         >
//           Go to Course ↗
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


import React from 'react';

const CourseDetail = ({ course }) => {
  if (!course) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-2xl font-bold">No Course Selected</h2>
        <p className="text-gray-400 mt-2">Please choose a course to view details.</p>
      </div>
    );
  }

  // Format date
  const formattedDate = new Date(course.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-20 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Course Image */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src={course.imageURL}
            alt={course.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Title + Tag */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-sm text-gray-400 mt-2">{course.tag}</p>
          </div>

          <span
            className={`mt-4 md:mt-0 text-xs font-semibold px-3 py-1 rounded-full 
              ${course.typeOfCourse === 'PAID' ? 'bg-red-600' : 'bg-green-600'}`}
          >
            {course.typeOfCourse}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Level + Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h4 className="font-semibold text-lg">📚 Level: <span className="text-gray-300">{course.CourseLevel}</span></h4>
          </div>
          <div>
            <h4 className="font-semibold text-lg">
              💰 Price: <span className="text-gray-300">₹{course.price}</span>
            </h4>
          </div>
        </div>

        {/* Price Updated Date */}
        <p className="text-sm text-gray-500 mb-10">
          💡 Price last updated on <span className="text-white font-medium">{formattedDate}</span>
        </p>

        {/* Action Button */}
        <a
          href={course.CourseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 font-semibold transition"
        >
          Go to Course ↗
        </a>
      </div>
    </div>
  );
};

export default CourseDetail;