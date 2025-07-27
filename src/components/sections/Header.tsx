'use client';

import { FaTwitter, FaLinkedinIn, FaGithubAlt, FaBlogger, FaHackerrank, FaMapMarkerAlt, FaEnvelope, FaLink } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">Kartike Kishore</h1>
      <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Software Engineer | Backend Systems | Competitive Programmer</p>
      
      {/* Social Links */}
      <div className="flex gap-6 justify-center mb-8">
        <a href="https://twitter.com/KartikeKishore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kartike-kishore-2163861a4" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/kartikekishore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
          <FaGithubAlt size={24} />
        </a>
        <a href="https://mainhukartike.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
          <FaBlogger size={24} />
        </a>
        <a href="https://www.hackerrank.com/kartikekishore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
          <FaHackerrank size={24} />
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm mb-12 text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500 dark:text-gray-500" /> 
          <span>Bangalore, India</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500 dark:text-gray-500" />
          <a href="mailto:kartikekishore@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">kartikekishore@gmail.com</a>
        </div>
        <div className="flex items-center gap-2">
          <FaLink className="text-gray-500 dark:text-gray-500" />
          <a href="https://github.com/kartikekishore" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">github.com/kartikekishore</a>
        </div>
      </div>
    </div>
  );
} 