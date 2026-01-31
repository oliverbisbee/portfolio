'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science | Economics & Statistics Minors',
      institution: 'University of Toronto',
      period: 'September 2024 - May 2028',
      details: [
        'Relevant coursework: Data Structures & Algorithms, Software Design, Software Tools, Systems Programming',
        'GPA 3.3 / 4.0',
      ]
    },
    {
      degree: 'Ontario Secondary School Diploma',
      institution: 'Nelson High School',
      period: 'September 2020 - June 2024',
      details: [
        'GPA 97 / 100',
      ]
    }
  ];

  const experience = [
    {
      title: 'Software Instructor',
      company: 'Ultimate Coders',
      period: 'June 2025 - September 2025',
      details: [
        'Developed and delivered hands-on programming workshops in Python, Java, JavaScript, and C++ for cohorts of 12+ students, emphasizing software design, algorithms, and problem-solving techniques',
        'Translated complex concepts into clear, structured explanations and documentation, strengthening technical communication skills',
        'Created reusable code examples, exercises, and technical documentation adopted across multiple cohorts, standardizing workflows and improving instructional consistency'
      ]
    },
    {
      title: 'Swim Instructor & Lifeguard',
      company: 'City of Burlington',
      period: 'September 2022 - August 2023',
      details: [
        'Coordinated daily schedules and team operations for 10+ staff, ensuring smooth execution of programs and compliance with safety protocols',
        'Implemented and monitored safety procedures, maintaining 100% adherence and minimizing operational incidents',
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Resume</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-accent"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full transform -translate-x-[9px]" />
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h4>
                    <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                    <p className="text-text text-sm mb-3">{edu.period}</p>
                    <ul className="list-disc list-inside space-y-1 text-text text-sm">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Work Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative pl-8 border-l-2 border-accent"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full transform -translate-x-[9px]" />
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-primary mb-1">{exp.title}</h4>
                    <p className="text-secondary font-medium mb-2">{exp.company}</p>
                    <p className="text-text text-sm mb-3">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-1 text-text text-sm">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}