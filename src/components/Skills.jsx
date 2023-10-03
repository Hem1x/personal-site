import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/about';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent md:dark:bg-transparent md:text-dark md:dark:text-light md:font-bold"
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
      <h2 className="font-bold text-8xl mt-32 mb-10 w-full text-center md:text-6xl md:mt-32  sm:text-4xl">
        Навыки
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLignt dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      
      lg:bg-circularLigntLg 
      lg:dark:bg-circularDarkLg
      
      md:bg-circularLightMd
      md:dark:bg-circularDarkMd

      sm:bg-circularLightSm
      sm:dark:bg-circularDarkSm
      ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-blue-700 text-light py-3 px-6 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
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
