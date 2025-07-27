'use client';

const skills = [
  { name: "Spring Boot 3 & Microservices", level: 95 },
  { name: "Backend Architecture & Optimization", level: 92 },
  { name: "Observability & Distributed Tracing", level: 80 },
  { name: "Problem Solving", level: 90 }
];

export default function Skills() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-bold m-1 text-gray-800 dark:text-white">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2">
              <div 
                className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-300" 
                style={{width: `${skill.level}%`}}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 