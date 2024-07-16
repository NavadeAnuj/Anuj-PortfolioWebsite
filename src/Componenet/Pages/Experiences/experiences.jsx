import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Java Intern',
    company: 'Conceptserve Technologies',
    duration: '3 months',
    description: 'Worked on developing and maintaining Java-based applications. Participated in all phases of the software development lifecycle, including designing, coding, testing, and debugging. Assisted in creating and improving documentation, contributed to code reviews, and collaborated with senior developers to enhance application performance and functionality.'
  },
  {
    role: 'ReactJS Intern',
    company: 'Elsner Technologies',
    duration: '3 months',
    description: 'Developed user interfaces using ReactJS, collaborated with the development team, and contributed to various projects.'
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-4 md:p-8 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center md:text-left"
        >
          My Experience
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{experience.role}</h2>
              <p className="text-gray-400">{experience.company}</p>
              <p className="text-gray-400">{experience.duration}</p>
              <p className="mt-4 text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
