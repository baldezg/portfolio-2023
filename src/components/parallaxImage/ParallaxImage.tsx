import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import './ParallaxImage.css';

type Props = {
    image: string;
    text: string;
}
const ParallaxImage: React.FC<Props> = ({image, text}) => {
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
      }
      
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="parallax">
      <div ref={ref}>
        <img src={image} alt="imagens do projeto" />
      </div>
      <motion.h2 
      className="parallax__text" style={{ y }}>{text}</motion.h2>
    </section>
  )
}

export default ParallaxImage;