'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'R', icon: '📊' },
    { name: 'Git/GitHub', icon: '🔧' },
    { name: 'Data Structures & Algorithms', icon: '🧮' },
    { name: 'Software Design', icon: '🏗️' },
    { name: 'APIs', icon: '🔌' },
    { name: 'SQL', icon: '🗄️' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden border-4 border-accent">
                <Image
                  src="/images/profileimage.png"
                  alt="Profile photo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 40%', transform: 'scale(2.5)' }}
                />
              </div>
            </div>

            {/* Bio & Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Let me introduce myself.
              </h3>

              <p className="text-text mb-6 leading-relaxed">
                I'm a second-year Computer Science student at the University of Toronto,
                minoring in Statistics and Economics. I'm passionate about building practical software solutions, with experience in 
                software development, data systems, and creating user-focused applications. I enjoy creating systems that solve real-world problems
                and am eager to apply my technical skills to impactful projects.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary text-lg">Profile</h4>

                <p className="text-text">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:OliBisbee+Portfolio@gmail.com"
                    className="text-accent hover:underline"
                  >
                    OliBisbee+Portfolio@gmail.com
                  </a>
                </p>

                <p className="text-text">
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/oliverbisbee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/oliverbisbee
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-primary">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center">
                      <span className="text-xl mr-2">{skill.icon}</span>
                      <span className="text-l font-medium text-primary">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}