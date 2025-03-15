export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Pablo Enrique Díaz Ramírez</h2>
            <p className="text-gray-400">Software Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/pdramirez-dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="mailto:pdramirez.h@gmail.com" className="hover:text-blue-400">
              Email
            </a>
            <a href="tel:+18139526689" className="hover:text-blue-400">
              Phone
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Pablo Enrique Díaz Ramírez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}