import React, { useState } from "react";
import "./AboutPage.css";
import resume from "../../assets/resume/resume.pdf";

import { AnimatePresence, motion } from "framer-motion";
import { ProjectThumb } from "../../components/projectThumb/ProjectThumb";
import { Plus, LinkIcon, LinkedinLogo, GithubLogo } from "../../icons";

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState("");

  const showDetails = (topic: string) => {
    if (isOpen === topic) {
      setIsOpen("");
    } else {
      setIsOpen(topic);
    }
  };

  return (
    <div className="wrapper">
      <main className="about">
        <motion.header
          className="about__header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="title">
            Cr<span>i</span>o si<span>t</span>es <br />
            &nbsp; & desenvolvo <br />
            &nbsp;&nbsp;&nbsp; aplicações web
          </h2>
        </motion.header>

        <div className="about__process">
          <h3>Pensando no cliente em primeiro lugar</h3>
          <h3>e imbuído em oferecer produtos de alta qualidade.</h3>
          <h3>
            Utilizo minhas habilidades em desenvolvimento web, <br /> web design
            e UX design para atender suas expectativas{" "}
          </h3>
          <h3> e satisfazer nossos clientes!</h3>
        </div>
        <section className="about__projects">
          <h3 className="projects__heading">Meu Trabalho</h3>
          <div className="projects__section">
            <ProjectThumb />
            <h4 className="project__description">
              Landign page para serviços de TI.
            </h4>
          </div>
        </section>

        <section className="about__skills">
          <h3>Minhas Habilidades</h3>
          <div className="skills__topic">
            <h4>Desenvolvimento web</h4>
            <button
              onClick={() => showDetails("development")}
              className="topic__info"
            >
              <Plus className="icon" />
            </button>
          </div>
          {isOpen === "development" && (
            <ul className="list__skills">
              <li>Lógica de Programação</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
            </ul>
          )}
          <hr />
          <div className="skills__topic">
            <h4>UI/UX Design</h4>
            <button
              onClick={() => showDetails("design")}
              className="topic__info"
            >
              <Plus className="icon" />
            </button>
          </div>
          {isOpen === "design" && (
            <ul className="list__skills">
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          )}
          <hr />
        </section>
        <div className="link__box">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Visualize meu currículo
          </a>
          <LinkIcon className="icon__link" />
        </div>
        <section className="socials__footer">
          <h3>Me encontre em</h3>
          <div className="icons__section">
            <LinkedinLogo className="socials__icon" />
            <GithubLogo className="socials__icon" />
          </div>
        </section>
        <h3 className="thanks">Obrigado por chegar até aqui!</h3>
      </main>
    </div>
  );
};

export default About;
