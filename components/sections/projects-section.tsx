'use client';

import { motion } from 'framer-motion';

export function ProjectsSection() {
  const projects = [
      {
        title: 'FireEye — AI Based Wildfire Threat Detection',
        description:
          'Collaborated in an interdisciplinary team to build an AI powered wildfire threat detection system using IoT sensor data, machine learning, NASA FIRMS API, and weather analysis for real time monitoring and risk prediction.',
        tags: [
          'Python',
          'TensorFlow',
          'OpenCV',
          'React',
          'Next.js',
          'AI',
        ],
        impact: 'Live dashboard with emergency alerts',
        icon: '🔥',
      },
      {
        title: 'Pixel Based Cybersecurity Awareness Game',
        description:
          'Developing a story driven cybersecurity game designed to teach phishing, social engineering, and network security concepts through interactive pixel art missions.',
        tags: [
          'Cybersecurity',
          'Game Design',
          'Awareness',
          'Story Based Learning',
        ],
        impact: 'Making cyber learning engaging',
        icon: '🎮',
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glassmorphism p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors flex-1">
                  {project.title}
                </h3>
                <div className="text-2xl ml-2">
                  {project.icon}
                </div>
              </div>

              <p className="text-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-6 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="text-sm text-accent font-semibold">Impact:</p>
                <p className="text-sm text-foreground mt-1">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
