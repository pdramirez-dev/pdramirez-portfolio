import Image from "next/image";
import Hero from "../components/home/Hero";
import About from "../components/about/About";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 transition-colors">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
