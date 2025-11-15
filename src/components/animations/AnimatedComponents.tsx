import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Fade Up Animation
export const FadeUp = ({ 
  children, 
  delay = 0,
  className = ''
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide In Animation
export const SlideIn = ({ 
  children, 
  direction = 'left',
  delay = 0,
  className = ''
}: { 
  children: ReactNode; 
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}) => {
  const xValue = direction === 'left' ? -50 : 50;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Children Container
export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  staggerDelay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      },
      hidden: {}
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger Child Item
export const StaggerItem = ({ 
  children, 
  className = ''
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Page Transition Wrapper
export const PageTransition = ({ 
  children,
  className = ''
}: { 
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Magnetic Button Wrapper
export const MagneticButton = ({ 
  children,
  className = '',
  ...props
}: { 
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <motion.button
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);

// Shine Effect Component
export const ShineButton = ({ 
  children,
  className = '',
  ...props
}: { 
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <motion.button
    whileHover={{ 
      scale: 1.03,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
    className={`relative overflow-hidden ${className}`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <motion.span 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{ duration: 0.5 }}
    />
  </motion.button>
);