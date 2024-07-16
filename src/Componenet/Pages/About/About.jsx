import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-4 md:p-8 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center md:text-left"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 text-lg text-center md:text-left"
        >
          Hi, I'm Anuj Navade, a passionate developer with expertise in ReactJS and a love for creating innovative solutions. I have a strong background in computer applications and a deep interest in technology and creativity.
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-center md:text-left"
        >
          Education
        </motion.h2>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="space-y-4"
        >
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-gray-300">Khyati Foundation, Ahmedabad</p>
              </div>
              <div className="text-gray-400">2021-2024</div>
            </div>
            <p className="text-gray-300">Relevant coursework: Programming, Web Development, Database Management, and more.</p>
          </motion.li>
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-xl font-bold">High School</h3>
                <p className="text-gray-300">Sharda Vidhyalay, Ahmedabad</p>
              </div>
              <div className="text-gray-400">2020-2021</div>
            </div>
            <p className="text-gray-300">Relevant coursework: Mathematics, Physics, Computer Science, and more.</p>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
}

export default About;
