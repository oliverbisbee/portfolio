import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      
      <footer className="bg-primary text-white py-8 text-center">
        <p>© 2026 Oliver Bisbee. All rights reserved.</p>
      </footer>
    </main>
  );
}