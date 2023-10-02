// import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
// import React, { useRef } from 'react'
// import ParallaxEffect from './components/parallaxEffect/ParallaxEffect'
// export const Playground = () => {
//   const { scrollYProgress } = useScroll()
//   //find a scroll effect.
// // Source: https://stackoverflow.com/a/51828976 .
// // const ScrollDemo = () => {
// //    const myRef = useRef(null)

// //    const executeScroll = () => myRef.current.scrollIntoView()    
// //    // run this function from an event handler or an effect to execute scroll 

// //    return (
// //       <> 
// //          <div ref={myRef}>Element to scroll to</div> 
// //          <button onClick={executeScroll}> Click to scroll </button> 
// //       </>
// //    )
// // }

//    const scrollRef = useRef(null);

   

//    return (
//      <div ref={scrollRef} style={{ overflow: "scroll" }}>
//        <motion.div
//          initial={{ opacity: 0 }}
//          whileInView={{ opacity: 1 }}
//          viewport={{ root: scrollRef }}
//          className='parallax-element'
//        />
//        <motion.div
//         className='parallax-element two'
//          initial={{ opacity: 0 }}
//          whileInView={{ opacity: 1 }}
//          transition={{ duration: 2 }}
         
//        />
//        <motion.div
//          className='parallax-element three'
//          initial={{ opacity: 0 }}
//          whileInView={{ opacity: 1 }}
//          viewport={{ root: scrollRef }} //usa o elemento anterior como parâmetro, ou seja quando esse elemento entrar na viewport valerá para este também.
//        />
//      </div>
//    )
//  }







import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const ParallaxEffect = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div style={{ height: "200vh" }}>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "blue",
          y,
        }}
      />
    </div>
  );
};


  
  



