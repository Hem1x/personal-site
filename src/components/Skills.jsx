import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', x: '2vw', y: '-7vw' },
  { name: 'CSS', x: '8vw', y: '3vw' },
  { name: 'JavaScript', x: '-10vw', y: '3vw' },
  { name: 'TypeScript', x: '15vw', y: '-2vw' },
  { name: 'React', x: '1vw', y: '9vw' },
  { name: 'Redux Toolkit', x: '-12vw', y: '-5vw' },
  { name: 'Next.js', x: '-15vw', y: '10vw' },
  { name: 'Git/Github', x: '15vw', y: '8vw' },
  { name: 'Webpack', x: '5vw', y: '-15vw' },
  { name: 'Vite', x: '15vw', y: '-10vw' },
  { name: 'SASS/SCSS', x: '-10vw', y: '-13vw' },
  { name: 'Bootstrap', x: '25vw', y: '3vw' },
  { name: 'Firebase', x: '-23vw', y: '3vw' },
  { name: 'Figma', x: '-23vw', y: '-7vw' },
  { name: 'TailwindCSS', x: '25vw', y: '-8vw' },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Навыки
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLignt">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-blue-700 text-light py-3 px-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            x={skill.x}
            y={skill.y}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
