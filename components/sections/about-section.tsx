'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="glassmorphism p-8 rounded-lg"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am a B.Tech Computer Science and Engineering student specialising in Cyber Security at Silver Oak University, passionate about ethical cybersecurity, AI safety, and secure systems.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                 My interests include threat detection, vulnerability analysis, AI driven security, prompt injection risks, and LLM behaviour analysis. I enjoy exploring how intelligent technologies can strengthen digital security.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                 Beyond academics, I actively contribute to technical communities through IEEE leadership, hackathons, and collaborative projects that combine innovation with real world problem solving.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {[
              {
                label: 'Current CGPA',
                value: '9.27',
                icon: '🎓',
              },
              {
                label: 'Technical Projects',
                value: '2+',
                icon: '💻',
              },
              {
                label: 'IEEE Leadership Roles',
                value: '2+',
                icon: '🚀',
              },
              {
                label: 'Hackathons & Events',
                value: '5+',
                icon: '🏆',
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glassmorphism p-6 rounded-lg border border-accent/30"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{stat.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
