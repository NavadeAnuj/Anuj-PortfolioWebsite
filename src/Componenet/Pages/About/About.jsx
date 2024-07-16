import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen p-4 md:p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center md:text-left">About Me</h1>
        <p className="mb-8 text-lg text-center md:text-left">
          Hi, I'm Anuj Navade, a passionate developer with expertise in ReactJS and a love for creating innovative solutions. I have a strong background in computer applications and a deep interest in technology and creativity.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Education</h2>
        <ul className="space-y-4">
          <li>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-gray-300">Khyati Foundation, Ahmedabad</p>
              </div>
              <div className="text-gray-400">2021-2024</div>
            </div>
            <p className="text-gray-300">Relevant coursework: Programming, Web Development, Database Management, and more.</p>
          </li>
          <li>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-xl font-bold">High School</h3>
                <p className="text-gray-300">Sharda Vidhyalay, Ahmedabad</p>
              </div>
              <div className="text-gray-400">2020-2021</div>
            </div>
            <p className="text-gray-300">Relevant coursework: Mathematics, Physics, Computer Science, and more.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
