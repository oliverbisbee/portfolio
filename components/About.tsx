'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript/React', level: 85 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Machine Learning', level: 75 },
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
                  src="/profileimage.png"
                  alt="Profile photo"
                  width={256}
                  height={256}
                  /*className="object-cover object-[50%-60%] scale-235"*/
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 40%', transform: 'scale(1.93)' }}
                />
              </div>
            </div>

            {/* Bio & Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Let me introduce myself.
              </h3>

              <p className="text-text mb-6 leading-relaxed">
                I'm a second year Computer Science major at the University of Toronto,
                minoring in Statistics and Economics. I'm a software engineer focused
                on building practical, high impact systems, with experience in data
                analysis, machine learning, and web development. I am currently
                seeking opportunities to apply these skills in real world projects.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Profile</h4>
                <p className="text-text">
                  <strong>Email:</strong> oli.bisbee+portfolio@gmail.com
                </p>
                <p className="text-text">
                  <strong>GitHub:</strong> github.com/oliverbisbee
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-primary">Skills</h4>
                {skills.map((skill) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary">
                        {skill.name}
                      </span>
                      <span className="text-sm text-text">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
