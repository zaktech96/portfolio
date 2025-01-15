"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string;
  label: string;
}

const sections: TimelineItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function TimelineNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center gap-4">
        {sections.map(({ id, label }) => (
          <div key={id} className="group relative">
            <div
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 
                       bg-card/80 backdrop-blur-sm rounded opacity-0 -translate-x-2 
                       transition-all duration-200 group-hover:opacity-100 
                       group-hover:translate-x-0 whitespace-nowrap"
            >
              {label}
            </div>
            <motion.button
              onClick={() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200
                       ${activeSection === id 
                         ? 'bg-primary scale-125' 
                         : 'bg-foreground/20 hover:bg-foreground/40'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {id !== sections[sections.length - 1].id && (
              <div className="h-12 w-px bg-foreground/20 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 