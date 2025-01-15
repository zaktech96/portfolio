"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-8 p-2 rounded-xl 
                 bg-white/10 backdrop-blur-lg border border-white/20 
                 shadow-lg hover:shadow-xl dark:bg-black/10 dark:border-white/10
                 transition-all duration-300 hover:scale-110 z-[100]"
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <MoonIcon className="w-6 h-6 text-yellow-400" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <SunIcon className="w-6 h-6 text-yellow-500" />
        </motion.div>
      </div>
    </motion.button>
  );
} 