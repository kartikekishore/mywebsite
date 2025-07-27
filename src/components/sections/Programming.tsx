'use client';

import { FaCode } from 'react-icons/fa';

const profiles = [
  {
    platform: "Codeforces",
    username: "kary_",
    url: "https://codeforces.com/profile/kary_",
    rating: "Expert"
  },
  {
    platform: "Codechef",
    username: "kary_kk",
    url: "https://www.codechef.com/users/kary_kk",
    rating: "5star"
  },
  {
    platform: "LeetCode",
    username: "kartikekishore",
    url: "https://leetcode.com/kartikekishore/",
    rating: "1736"
  }
];

export default function Programming() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sports Programming</h2>
      <ul className="space-y-2">
        {profiles.map((profile, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaCode className="text-blue-500 dark:text-blue-400" />
            <a 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {profile.platform} {profile.username}
            </a>
            <span className="text-gray-600 dark:text-gray-400">({profile.rating})</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 