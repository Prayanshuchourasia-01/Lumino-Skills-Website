import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Mastering React for Beginners',
    instructor: 'John Doe',
    image: 'https://source.unsplash.com/400x250/?react,code',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: 2,
    title: 'Intro to Python Programming',
    instructor: 'Jane Smith',
    image: 'https://source.unsplash.com/400x250/?python,programming',
    tags: ['Python', 'Backend', 'Beginner'],
  },
  {
    id: 3,
    title: 'Blockchain Essentials',
    instructor: 'Satoshi Nakamoto',
    image: 'https://source.unsplash.com/400x250/?blockchain,tech',
    tags: ['Blockchain', 'Crypto', 'Advanced'],
  },
];

const CourseView = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">🔥 Explore Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-400 mb-4">By {course.instructor}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseView;