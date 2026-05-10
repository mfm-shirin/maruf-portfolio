'use client';

import { motion } from 'framer-motion';

export function SkillsSection() {
  const skillCategories = [
     {
        title: 'Cybersecurity',
        skills: [
          'Network Security',
          'Threat Detection',
          'Risk Assessment',
          'Vulnerability Analysis',
          'Secure Systems Design',
          'Prompt Injection Analysis',
        ],
      },
      {
        title: 'Tools & Platforms',
        skills: [
          'Kali Linux',
          'Wireshark',
          'Nmap',
          'Burp Suite (Beginner)',
          'Metasploit (Beginner)',
          'TryHackMe',
        ],
      },
      {
        title: 'Programming & AI',
        skills: [
          'Python',
          'Prompt Engineering',
          'LLM Behaviour Analysis',
          'AI Safety',
          'Adversarial AI',
          'GitHub',
        ],
      },
      {
        title: 'Learning & Interests',
        skills: [
          'Ethical Hacking',
          'CTF Problem Solving',
          'Linux Fundamentals',
          'Cybersecurity Research',
          'Secure Systems',
          'Space + Cybersecurity',
        ],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glassmorphism p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-6 text-accent group-hover:glow-text transition-all">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-secondary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glassmorphism p-8 rounded-lg border border-accent/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent">
          Currently Exploring
          </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'AI Safety',
                'LLM Security',
                'Prompt Injection',
                'Threat Detection',
                'Ethical Hacking',
                'Linux Security',
                'CTF Challenges',
                'Cyber Research',
              ].map((topic) => (
                <motion.div
                  key={topic}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 border border-secondary/50 rounded-lg text-center hover:border-accent/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {topic}
                  </span>
                </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
}
