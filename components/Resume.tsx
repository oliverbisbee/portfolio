'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: 'September 2020 - May 2024',
      details: [
        'Relevant coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
        'GPA: 3.8/4.0',
        'Dean\'s List: Fall 2021, Spring 2022, Fall 2022'
      ]
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      period: 'September 2016 - June 2020',
      details: [
        'Graduated with honors',
        'Advanced Placement courses in Computer Science and Mathematics'
      ]
    }
  ];

  const experience = [
    {
      title: 'Software Engineer Intern',
      company: 'Company Name',
      period: 'June 2023 - August 2023',
      details: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver features on time',
        'Improved application performance by 30% through code optimization'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'University Research Lab',
      period: 'January 2023 - May 2023',
      details: [
        'Conducted data analysis using Python and statistical methods',
        'Published findings in university research journal',
        'Presented research at student conference'
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