import React, { useState } from 'react';

const skills = ['Python', 'Web Development', 'C++', 'Java', 'C', 'Cloud Computing', 'Android dev', 'BlockChain', 'HTML', 'CSS'];
const levels = ['Beginners', 'Intermediate', 'Expert'];
const upcoming = ['DevOps (Upcoming)', 'Artificial Intelligence (Upcoming)', 'Machine Learning (Upcoming)'];

const FilterCourse = () => {
  const [selected, setSelected] = useState({
    skills: [],
    levels: [],
    upcoming: [],
  });

  const handleChange = (category, value) => {
    setSelected((prev) => {
      const alreadySelected = prev[category].includes(value);
      const updated = alreadySelected
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];

      console.log(`${category.toUpperCase()} →`, updated);
      return { ...prev, [category]: updated };
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
     
      {/* Filters */}
      <div className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-bold text-center mb-20">Choose</h2>

        <div className="grid md:grid-cols-3 gap-10 ml-8">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🧠 Skills</h3>
            <div className="space-y-3">
              {skills.map((skill) => (
                <label key={skill} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={selected.skills.includes(skill)}
                    onChange={() => handleChange('skills', skill)}
                    className="w-4 h-4"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Levels */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🎯 Level</h3>
            <div className="space-y-3">
              {levels.map((level) => (
                <label key={level} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    value={level}
                    checked={selected.levels.includes(level)}
                    onChange={() => handleChange('levels', level)}
                    className="w-4 h-4"
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Upcoming Topics */}
        
<div>
  <h3 className="text-xl font-semibold mb-4">🚀 Upcoming Topics</h3>
  <div className="space-y-3">
    {upcoming.map((topic) => (
      <label
        key={topic}
        className="flex items-center gap-3 cursor-not-allowed opacity-50"
      >
        <input
          type="checkbox"
          value={topic}
          checked={false}
          disabled
          className="w-4 h-4"
        />
        <span>{topic}</span>
      </label>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default FilterCourse;