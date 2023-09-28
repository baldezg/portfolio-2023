import React from "react";
import "./ProjectPage.css";
import { Chevron } from "../../icons";
import image from "../../assets/img/responsiveLayout.png";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/frameLayout.png";

import ParallaxImage from "../../components/parallaxImage/ParallaxImage";
import { motion } from "framer-motion";

const ProjectPage: React.FC = () => {
  return (
    <div className="wrapper__project">
      <div className="project__header">
        <h1>Landing Page Para Serviços de TI</h1>
        <section className="overview__cover">
          <motion.img
            src={image1}
            alt="imagem do projeto"
            className="cover"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="overview__description"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>
              O objetivo dessa página é fornecer informações sobre os serviços
            </h3>
            <h3>
              oferecidos pela empresa e atrair potenciais clientes interessados
            </h3>
            <h3>em contratar serviços de tecnologia.</h3>
          </motion.div>
        </section>
        <div className="project__skills">
          <h2>Desenvolvimento Web</h2>
          <h2>ReactJS</h2>
          <h2>Web Design</h2>
        </div>
      </div>
      <section className="project__links">
        <a
          href="https://it-services-landing-page.vercel.app/"
          className="button__container"
        >
          <p>Visite a página</p>
          <div className="arrow__div">
            <Chevron className="icon" />
          </div>
        </a>
        <a
          href="https://github.com/baldezg/it-services-landing-page"
          className="button__container"
        >
          <p>Acesse o repositório</p>
          <div className="arrow__div">
            <Chevron className="icon" />
          </div>
        </a>
      </section>
      <ParallaxImage image={image} text={"Design Responsivo"} />
      <ParallaxImage image={image2} text={"Layout limpo e Organizado"} />
    </div>
  );
};
export default ProjectPage;
