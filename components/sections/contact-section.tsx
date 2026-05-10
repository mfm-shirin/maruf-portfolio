'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
              {
                icon: '📧',
                label: 'Email',
                value: 'mmaruffatema@gmail.com',
                href: 'mailto:mmaruffatema@gmail.com',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'linkedin.com/in/maruf-fatema-mansuri-940099321',
                href: 'https://linkedin.com/in/maruf-fatema-mansuri-940099321',
              },
              {
                icon: '🐙',
                label: 'GitHub',
                value: 'github.com/mfm-shirin',
                href: 'https://github.com/mfm-shirin',
              },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glassmorphism p-6 rounded-lg border border-accent/20 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer block"
              >
                <div className="text-4xl mb-3">
                  {contact.icon}
                </div>

                <h3 className="text-lg font-semibold text-accent mb-2">
                  {contact.label}
                </h3>

                <p className="text-foreground text-sm break-words">
                  {contact.value}
                </p>
              </motion.a>
         ))}
        </motion.div>

        <motion.form
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glassmorphism p-8 rounded-lg border border-accent/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-accent mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-accent mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold text-accent mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="Subject"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-accent mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-accent to-primary text-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-secondary/10 border border-secondary/50 rounded-lg text-center"
            >
              <p className="text-secondary font-semibold">Thank you! I&apos;ll get back to you soon.</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
