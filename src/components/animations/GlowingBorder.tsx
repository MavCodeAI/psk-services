import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  borderRadius?: string;
}

const GlowingBorder = ({ 
  children, 
  className = '',
  borderWidth = 2,
  borderRadius = 'rounded-xl'
}: GlowingBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className={`absolute inset-0 ${borderRadius} overflow-hidden`}
        style={{
          padding: borderWidth,
          background: 'linear-gradient(45deg, #10B981, #34D399, #10B981)',
          backgroundSize: '200% 200%',
          zIndex: -1
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className={`w-full h-full ${borderRadius} bg-psyco-black-DEFAULT`} />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;