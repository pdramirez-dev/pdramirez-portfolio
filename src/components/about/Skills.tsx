export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "PHP", "HTML", "CSS", "TypeScript", "C#"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "SQL", "NoSQL"]
    },
    {
      name: "Frameworks & Tools",
      skills: ["Laravel", "AWS", "Docker", "Node.js", "React.js", "GraphQL", "Git", "Linux", "WSL"]
    },
    {
      name: "Methodologies & Concepts",
      skills: ["Scrum", "Software Development Life Cycle", "Design Patterns", "Software Architecture", "Semantic Web", "Linked Data"]
    }
  ];

  return (
    <section id="skills" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}