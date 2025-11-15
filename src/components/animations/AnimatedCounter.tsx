import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2,
  className = '',
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) => {
  const controls = useAnimation();
  const countRef = useRef(0);
  const [count, setCount] = React.useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / (endTime - startTime));
      
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration]);
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};

export default AnimatedCounter;