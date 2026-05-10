'use client';

import { motion } from 'framer-motion';

export function HackathonsSection() {
  const hackathons = [
    {
      title: 'Bharatiya Antariksh Hackathon 2025',
      organization: 'ISRO (Indian Space Research Organisation)',
      description:
        'Successfully submitted an idea addressing real world space and technology challenges and was recognised for innovation, curiosity, and commitment to advancing India’s space ecosystem.',
      tags: [
        'ISRO',
        'Space Tech',
        'Innovation',
        'Problem Solving',
      ],
      year: '2025',
      icon: '🚀',
    },
    {
      title: 'Zomathon — The Data Hackathon',
      organization: 'Coding Ninjas × Zomato (Eternal)',
      description:
        'Participated in a data focused hackathon demonstrating analytical thinking and collaborative problem solving through real world business challenges.',
      tags: [
        'Data Analytics',
        'Problem Solving',
        'Hackathon',
        'Teamwork',
      ],
      year: '2025',
      icon: '📊',
    },
  ];

  return (
    <section
      id="hackathons"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Hackathons & Competitions
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.title}
              whileHover={{ y: -8 }}
              className="glassmorphism p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-accent">
                  {hackathon.title}
                </h3>

                <span className="text-2xl">
                  {hackathon.icon}
                </span>
              </div>

              <p className="text-secondary text-sm mb-2">
                {hackathon.organization}
              </p>

              <p className="text-muted-foreground text-sm mb-4">
                {hackathon.year}
              </p>

              <p className="text-foreground text-sm leading-relaxed mb-4">
                {hackathon.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {hackathon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}