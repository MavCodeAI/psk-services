import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

const SkeletonLoader = ({ 
  className = '',
  width = '100%',
  height = '20px',
  borderRadius = 'rounded'
}: SkeletonLoaderProps) => {
  return (
    <motion.div
      className={`bg-psyco-black-light ${borderRadius} ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default SkeletonLoader;