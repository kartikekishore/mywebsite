'use client';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "C/C++", "TypeScript", "Python", "SQL", "Go"]
  },
  {
    category: "Backend",
    skills: ["Spring Boot 3", "Hibernate",  "Kafka", "REST", "Camunda BPMN", "Microservices"]
  },
  {
    category: "DevOps/Infra",
    skills: ["Docker", "AWS", "Grafana", "OpenTelemetry", "Nomad"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Neo4j", "Memgraph", "OracleDB", "MongoDB"]
  },
  {
    category: "Tools & Frameworks",
    skills: ["React.js", "Node.js", "Express.js", "Git", "Jira", "Confluence", "Prisma", "Firebase Auth", "Electron.js",  "Google Tink", "Apicurio"]
  },
  {
    category: "AI Tools",
    skills: ["Gemini", "Claude", "Copilot", "Windsurf", "Obsidian"]
  }
];

export default function Skills() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2 text-gray-800 dark:text-white text-base">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 