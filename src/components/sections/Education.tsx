'use client';

const education = [
  {
    degree: "B-Tech Computer Science",
    institution: "IIT ISM Dhanbad",
    period: "2019-2023"
  },
  {
    degree: "Higher Education (10+2)",
    institution: "Delhi Public School, Bhilai",
    period: "2017-2019"
  }
];

export default function Education() {
  return (
    <section className="bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-bold text-base text-gray-800 dark:text-white">{edu.institution}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{edu.degree} {edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 