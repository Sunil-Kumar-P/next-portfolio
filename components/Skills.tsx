// components/Skills.tsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Languages known: Python (Intermediate), JavaScript (Intermediate), PHP (Intermediate), C++ (Beginner), Java (Beginner)</li>
          <li>Software: Visual Studio Code, Jupyter Notebook, Eclipse, Android Studio</li>
          <li>Database: MySQL (basic), SQLiteDB (basic), Firebase (basic)</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
