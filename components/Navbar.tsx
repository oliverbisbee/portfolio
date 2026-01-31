'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}>
            Oliver Bisbee
          </h1>
          <ul className="flex gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors font-medium ${
                      scrolled 
                        ? (isActive ? 'text-accent' : 'text-primary hover-text-accent')
                        : (isActive ? 'text-accent font-semibold' : 'text-white hover-text-accent')
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}