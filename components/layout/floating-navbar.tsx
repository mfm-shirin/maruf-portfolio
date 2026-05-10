'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function FloatingNavBar() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 glassmorphism px-8 py-4 rounded-full"
    >
      <ul className="flex gap-8 items-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.href.slice(1));
                document.getElementById(item.href.slice(1))?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'text-accent glow-text'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
