import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-purple-800 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Pablo Enrique Díaz Ramírez
        </h1>
        <h2 className="text-xl md:text-2xl text-center mb-8">
          Software Developer | Backend Developer
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mb-10">
          Software developer with four years of experience in designing and implementing scalable 
          architectures and developing web-oriented services for product development companies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="#contact" 
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition-colors"
          >
            Contact Me
          </Link>
          <Link 
            href="#projects" 
            className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}