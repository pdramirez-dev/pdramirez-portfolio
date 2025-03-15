import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48 w-full bg-gray-300 dark:bg-gray-700">
        {/* 
        When you have real images, uncomment this:
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="w-full"
        /> 
        */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
          <span className="text-white text-xl font-bold">{project.title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}