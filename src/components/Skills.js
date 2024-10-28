// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Networking', 'Power Systems'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
