import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  // {
  //   title: 'Project One',
  //   description: 'A brief description of Project One. It includes details about the technologies used and the problem it solves.',
  //   link: 'https://anujportfoliowebsite.netlify.app/'
  // },
  {
    title: 'Horse Ride Booking System',
    description: 'A Tailwind CSS-powered booking system for horse rides, featuring state management with Redux. Users can seamlessly book rides and receive calendar invites, while the application ensures smooth data handling and a responsive user experience.',
    link: 'https://horseridebookingsystem.netlify.app/'
  },
  {
    title: 'Notes App',
    description: 'A TypeScript-based note-taking app with state management, allowing you to create, edit, and delete notes efficiently. It offers a clean interface and smooth user experience using static data.',
    link: 'https://notescreationsite.netlify.app/'
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
