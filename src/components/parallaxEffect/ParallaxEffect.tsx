import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ParallaxEffect = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]); 
  return (
    <div className="parallax-container">
      <motion.div className="parallax-element"
      style={{ y: yRange }} />
    </div>
  );
};

export default ParallaxEffect;
