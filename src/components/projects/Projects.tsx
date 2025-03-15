import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "CRIS-UCLV with VIVO CRIS",
      description: "Development of CRIS-UCLV software solution using VIVO CRIS semantic software for Marta Abreu Central University.",
      technologies: ["Semantic Web", "Docker", "DevOps", "Ontology Engineering"],
      image: "/projects/cris-uclv.jpg"
    },
    {
      title: "AWS Microservices",
      description: "Design and implementation of scalable architectures based on microservices using AWS services.",
      technologies: ["AWS", "Python", "TypeScript", "GraphQL", "C#"],
      image: "/projects/aws-microservices.jpg"
    },
    {
      title: "Laravel Web Application",
      description: "Development of backend web applications with Laravel and frontend with React JS for an SEO and marketing agency.",
      technologies: ["Laravel", "PHP", "MySQL", "React", "JWT"],
      image: "/projects/laravel-app.jpg"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}