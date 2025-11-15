import React from 'react';
import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-psyco-green-DEFAULT/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-psyco-green-light/5 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-psyco-green-dark/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 40, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default FloatingBlobs;