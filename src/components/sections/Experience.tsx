'use client';

const experiences = [
  {
    company: "Azentio Software Pvt. Ltd.",
    location: "Bengaluru, India",
    role: "Software Engineer",
    period: "Nov 2023 – Present",
    achievements: [
      "Developed core modules for a low-code/no-code lending engine, allowing business users to deploy financial products 70% faster by eliminating manual code deployments.",
      "Led development of a key microservice for DB operations featuring a GraphQL-style query engine for REST APIs; implemented dynamic request/response filtering to automate DDL/DML generation and execution.",
      "Designed a high-throughput automated verification system using document processing pipelines, reducing customer onboarding time from 15 minutes to under 60 seconds.",
      "Contributed to the Apicurio Registry open-source project by implementing Oracle DB support, expanding the project's enterprise database compatibility.",
      "Refactored critical REST APIs and data access layers, achieving a 35% latency reduction and increasing concurrent user capacity by 50%.",
      "Implemented a comprehensive Observability Stack (Grafana, Prometheus, Loki), reducing Mean Time to Resolution (MTTR) by 70% via custom Java instrumentation and proactive alerting.",
      "Orchestrated 60+ complex business processes using Camunda BPMN, standardizing workflows and significantly reducing manual operational errors."
    ],
    techStack: "Java, Spring Boot 3, Python, Microservices, Kafka, PostgreSQL, Neo4j, Memgraph, Camunda, Docker, Grafana, React, Google Tink, OracleDB"
  },
  {
    company: "Shivanssh Holdings LLP",
    location: "Bengaluru, India",
    role: "Founding Engineer",
    period: "June 2023 – Sept 2023",
    achievements: [
      "As the Founding Engineer, rapidly architected and deployed the entire back-end for the company's MVP, driving the product from initial concept to public launch in under 4 months on AWS.",
      "Developed a full-stack solution using Node.js, Express, PostgreSQL, integrating services with an Electron.js desktop application."
    ],
    techStack: "TypeScript, Node.js, Express.js, AWS, Electron.js, React, Firebase Auth, Prisma, PostgreSQL"
  },
  {
    company: "Fiserv",
    location: "Pune, India",
    role: "Technology Analyst Intern",
    period: "July 2022 – Sept 2022",
    achievements: [
      "Contributed to Credit and Risk Compliance by developing data-driven solutions using HQL, PowerBI, and Toad.",
      "Designed interactive PowerBI dashboards to enhance data visualization and deliver actionable business insights."
    ],
    techStack: "HQL, PowerBI, Toad, SQL"
  }
];

export default function Experience() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                <p className="text-base font-semibold text-gray-700 dark:text-gray-300">{exp.role}</p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right mt-1 sm:mt-0">
                <p>{exp.period}</p>
                <p className="italic">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700 dark:text-gray-300">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-base leading-relaxed">{achievement}</li>
              ))}
            </ul>
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Tech Stack:</span> {exp.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
