'use client';

import { motion } from 'framer-motion';

export function LeadershipSection() {
  const experiences = [
    {
      title: 'Secretary',
      company: 'Silver Oak University IEEE Signal Processing Society Student Branch Chapter',
      period: 'April 2026 – Present',
      description:
      'Leading AI focused technical initiatives, coordinating chapter activities and managing technical events, documentation and communication workflows.',
      achievements: [
      'Organising AI and cybersecurity focused initiatives',
      'Managing event planning and execution',
      'Leading technical communication and coordination',
      ],
    },
    {
      title: 'Secretary',
      company: 'Silver Oak University IEEE Women in Engineering Student Branch Affinity Group',
       period: 'January 2026 – March 2026',
       description:
      'Led chapter operations, strategic planning, and collaboration across executive and core teams for technical and community initiatives.',
      achievements: [
      'Coordinated chapter level planning',
      'Managed team collaboration and outreach',
      'Supported execution of technical initiatives',
      ],
    },
    {
      title: 'Content Vice Chair',
      company: 'Content Committees',
      period: 'May 2025 – December 2025',
      description:
      'Developed structured AI assisted content workflows for technical events, social media, and communication activities.',
      achievements: [
      'Created technical storytelling content',
      'Built structured prompt workflows',
      'Supported event branding and communication',
      ],
    },
    {
      title: 'Summer Intern',
      company: 'LinkVerse Internship',
      period: 'July 2025',
      description:
      'Worked on web development projects with focus on product thinking, execution workflows, and collaborative development.',
      achievements: [
      'Built web based project frameworks',
      'Presented project workflows',
      'Strengthened development fundamentals',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Leadership & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glassmorphism border-2 border-accent flex items-center justify-center font-bold text-accent">
                    {index + 1}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent/20 mt-2"></div>
                  )}
                </div>

                <div className="flex-1 pb-8 glassmorphism p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all group">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-secondary mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>

                  <p className="text-foreground mt-4 leading-relaxed mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-foreground text-sm">
                          <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
