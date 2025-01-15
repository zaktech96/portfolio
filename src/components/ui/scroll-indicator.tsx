"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <span className="text-base md:text-lg text-foreground/60 font-medium tracking-wide">
        Scroll Down
      </span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDownIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
      </motion.div>
    </motion.div>
  );
} 