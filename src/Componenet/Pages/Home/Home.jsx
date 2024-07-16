import React from 'react';
import Navbar from '../../Navbar/Navbar';
import profilePic from '../../../assets/Anuj.jpeg'; // Make sure to place your profile picture in the src/assets folder

const Home = () => {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center p-4">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img src={profilePic} alt="Profile" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            Hi, I'm Anuj Navade, a passionate developer with expertise in ReactJS and a love for creating innovative solutions. Welcome to my personal portfolio website.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
