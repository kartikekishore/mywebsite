'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    
    {
      title: "Automated Attendance App via face-recognition (Private Repo)",
      description: "Enables facial recognition-based student registration and attendance tracking using a lightweight MobileFaceNet model optimized for mobile ARM processors. ",
      technologies: "Google Ml kit, TensorflowLite, MobileFaceNet, Kotlin, MLkit, NodeJS, Bcrypt",
      githubLink: "https://github.com/kartikekishore/Student_attendance_btech",
      featured: false
    },
    {
      title: "K-Blog (Blogging Site)",
      description: "It is a Blogging website where users can post stories for others to read. It implements all CRUD operations for blogs. User Authentication (Google OAuth) and sessions are saved in Database.",
      technologies: "Express, Handle-bars, Nodejs, Google OAuth, MongoDB and Mongoose",
      liveLink: "https://k-kblog.herokuapp.com/dashboard",
      githubLink: "https://github.com/kartikekishore/k-blog"
    },
    {
      title: "Weather App",
      description: "Developed a Weather Web application that shows weather conditions including wind speed, UVI description, wind degree, temperature, pressure and other weather details of a specific place entered by the user. It fetches the API according to the city name entered by the user.",
      technologies: "HTML, CSS, JavaScript",
      liveLink: "https://kartikekishore.github.io/Weather_app/",
      githubLink: "https://github.com/kartikekishore/Weather_app"
    },
    {
      title: "YouTube Clone",
      description: "A Web Development project that uses Youtube API for searching videos and playing them.",
      technologies: "React, HTML, CSS, NodeJs",
      githubLink: "https://github.com/kartikekishore/YTUBE_REACT"
    }
  ];

  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className={`${
            project.featured ? 'border-2 border-blue-500/50' : 'border border-gray-200 dark:border-white/10'
          } rounded-lg p-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-black/30 transition-all duration-300`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
            {project.technologies && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
            )}
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 