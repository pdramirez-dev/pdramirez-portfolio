export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Datamart - Fintech Chile",
      period: "April 2023 - Present",
      responsibilities: [
        "Developing services using a wide range of AWS services, such as S3, RDS, Lambda, DynamoDB, API Gateway.",
        "Designing and implementing scalable and robust architectures based on microservices using services in AWS.",
        "Use Python, TypeScript, GraphQL, and C# for developing backend applications services on AWS.",
        "Utilizing best practices for code refactoring to improve code readability, maintainability, and performance.",
        "Applying design patterns and modular approaches to enhance the architecture and structure of codebases."
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "Interamplify - SEO and Online Marketing Agency",
      period: "January 2022 - January 2023",
      responsibilities: [
        "Design and development backend web applications in PHP language use Laravel framework.",
        "Database analysis, design and implements with MySQL.",
        "Creation of API REST Services, Authentication JWT, and interoperability platforms services.",
        "Implement frontend web application with HTML, CSS, Java Script and React JS Library."
      ]
    },
    {
      title: "Software Application Web Developer",
      company: "Marta Abreu Central University (UCLV)",
      period: "2019 - 2021",
      responsibilities: [
        "Designs and developer software solution CRIS-UCLV with VIVO CRIS semantic software.",
        "VIVO architecture analysis and design of system deployment methodology.",
        "Ontology engineering applied to the system of ontologies present in VIVO.",
        "Define the processes and guidelines for the integration and interoperability of VIVO with Dspace and Moodle repository according to EURO CRIS standards.",
        "Methodology for system administration and configuration.",
        "Deploying VIVO in Docker container using cloud computing and DevOps philosophy."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
              <h4 className="text-xl text-blue-700 dark:text-blue-400 mb-2">{exp.company}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}