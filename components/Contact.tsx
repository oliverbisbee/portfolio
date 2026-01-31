'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ContactLink {
  label: string;
  value: string;
  href: string | null;
  icon: string;
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'oli.bisbee+portfolio@gmail.com',
      href: 'mailto:oli.bisbee+portfolio@gmail.com',
      icon: '✉️'
    },
    {
      label: 'GitHub',
      value: 'github.com/oliverbisbee',
      href: 'https://github.com/oliverbisbee',
      icon: '💻'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/oliver-bisbee',
      href: 'https://linkedin.com/in/oliver-bisbee',
      icon: '💼'
    },
    {
      label: 'Location',
      value: 'Toronto, Canada',
      href: null,
      icon: '📍'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <p className="text-center text-text mb-12 text-lg">
            I'd love to hear from you! Feel free to reach out through any of the following channels.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {contact.href ? (
                    <a
                    href={contact.href}
                    target={contact.label !== 'Email' ? '_blank' : undefined}
                    rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg hover:bg-accent/5 transition-all border-2 border-transparent hover:border-accent group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{contact.icon}</span>
                      <div>
                        <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                          {contact.label}
                        </h3>
                        <p className="text-text text-sm">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{contact.icon}</span>
                      <div>
                        <h3 className="font-semibold text-primary">{contact.label}</h3>
                        <p className="text-text text-sm">{contact.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}