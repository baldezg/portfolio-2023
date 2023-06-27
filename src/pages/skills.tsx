import React from 'react';
import '../assets/css/skills.css';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import './skills.css';
import { useScroll } from "framer-motion"
const Skils: React.FC = () => {
    const ref = useRef(null);

  const options = {
    smooth: true,
  }

    return (
        <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main
       className="scroll__container"
       data-scroll-container ref={ref}
       >
        <section className="intro" data-scroll-section
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="9">
          <h1>This is the Introduction section</h1>
        </section>
        <section className="contents"
       
        data-scroll-section
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1"
        data-scroll-position="top">
          <h1>I Love React</h1>
          <h1>
            That's why I code every day
          </h1>
        </section>
        <section className="footer" data-scroll-section>
          <h1
            className="op-class"
            data-scroll
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll-speed="2"
          >
            Let's end the application with this Footer
          </h1>
        </section>
      </main>
    </LocomotiveScrollProvider>
    )
    
}

export default Skils;
        