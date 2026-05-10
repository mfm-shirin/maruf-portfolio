'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Cybersecurity Student';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glassmorphism p-1 float">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-4xl font-bold text-foreground">
              MF
            </div>
          </div>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4 h-24 sm:h-32 flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about cybersecurity, AI safety and secure systems, with a growing focus on ethical hacking, threat detection and real world security challenges.
        </motion.p>

       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent to-primary text-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>

          <a
          href="/Maruf_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
        >
          Download Resume
        </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex gap-8 justify-center text-muted-foreground"
        >
          {['Penetration Testing', 'Threat Analysis', 'Security Architecture'].map((skill, i) => (
            <div key={skill} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm hidden sm:inline">{skill}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
