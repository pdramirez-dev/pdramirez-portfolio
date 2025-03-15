export default function About() {
  return (
    <section id="about" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I am a software developer who is constantly learning, with four years of experience 
            in designing and implementing scalable architectures and developing web-oriented 
            services for product development companies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I have used best practices for code refactoring to improve code readability, 
            maintainability, and performance. I have experience in various programming languages 
            such as Python, TypeScript, GraphQL, C#, and PHP.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My experience also includes database analysis, design, and implementation, as well 
            as frontend development using HTML, CSS, JavaScript, and the React JS library. 
            Additionally, I have a solid academic background with a Bachelor&apos;s degree in 
            Software Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}