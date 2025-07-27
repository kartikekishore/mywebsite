'use client';

// UPDATED: Imported the FaMedium icon
import { FaRobot, FaYoutube, FaMedium } from 'react-icons/fa';

const activities = [
   {
    name: "Medium Profile",
    description: "Tech articles and write-ups",
    url: "https://medium.com/@kartikekishore",
    icon: FaMedium
  },
  {
    name: "ROBOISM Member",
    description: "Robotics and AI club",
    url: "https://roboism.in/",
    icon: FaRobot
  },
  {
    name: "LCI - Lights Camera ISM",
    description: "Film making club",
    url: "https://www.youtube.com/channel/UCHJV3I1GtG63GnnxfrO0XQA",
    icon: FaYoutube
  },
 
];

export default function Extracurriculars() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Extracurriculars</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <activity.icon className="text-blue-500 dark:text-blue-400" />
            <a 
              href={activity.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {activity.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}