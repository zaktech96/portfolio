"use client";

import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiDocker, SiAmazon, SiVercel,
  SiJavascript, SiSupabase, SiPrisma
} from 'react-icons/si';
import { LightBulbIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const skills = [
  { 
    name: 'Frontend', 
    items: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { 
        name: 'JavaScript', 
        icon: <SiJavascript className="text-[#F7DF1E] bg-[#0c0c0b] rounded-sm" />,
        textClassName: "text-black dark:text-white font-semibold"
      },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
    ]
  },
  { 
    name: 'Backend', 
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-black dark:text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-[#2D3748]" /> }
    ]
  },
  { 
    name: 'Tools', 
    items: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'AWS', icon: <SiAmazon className="text-[#FF9900]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> }
    ]
  },
  { 
    name: 'Soft Skills', 
    items: [
      { name: 'Problem Solving', icon: <LightBulbIcon className="w-5 h-5 text-primary" /> },
      { name: 'Communication', icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-primary" /> },
      { name: 'Team Work', icon: <UserGroupIcon className="w-5 h-5 text-primary" /> },
      { name: 'Adaptability', icon: <SparklesIcon className="w-5 h-5 text-primary" /> }
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless user experiences. With years of experience in web development, I specialise in
              building modern, responsive, and scalable applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career focused on
              solving complex problems through elegant solutions. I believe in writing clean,
              maintainable code and staying up-to-date with the latest technologies.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'Years Experience', value: '2+' },
                { label: 'Technologies', value: '5+' },
                { label: 'Communities involved in', value: '5+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card/70 dark:bg-card/50 backdrop-blur-sm p-4 rounded-lg 
                             shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-bold text-primary/90">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card/70 dark:bg-card/50 backdrop-blur-sm p-6 rounded-lg 
                           shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      className="flex items-center gap-3 px-4 py-2 bg-primary/20 dark:bg-primary/10 rounded-lg 
                                 hover:bg-primary/30 dark:hover:bg-primary/20 transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className={`text-sm text-foreground/90 ${skill.textClassName || ''}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About; 