import React, { useState } from "react";
import "./AboutPage.css";
import resume from "../../assets/resume/resume.pdf";

import { AnimatePresence, motion } from "framer-motion";
import { ProjectThumb } from "../../components/projectThumb/ProjectThumb";
import { LinkIcon, LinkedinLogo, GithubLogo } from "../../icons";
import SkillsList from "../../components/skillsList/SkillsList";
import SkillsTopic from "../../components/skillsTopic/SkillsTopic";

const designSkills = ["Figma", "Adobe XD"];
const developmentSkills = [
  "Lógica de Programação",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Git",
];

type Props = {
  variants: object;
};
const About: React.FC<Props> = ({ variants }) => {
  const [isOpen, setIsOpen] = useState("");

  const showDetails = (topic: string) => {
    if (isOpen === topic) {
      setIsOpen("");
    } else {
      setIsOpen(topic);
    }
  };

  return (
    <motion.div className="wrapper" variants={{ variants }}>
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

        <motion.div
          className="about__process"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3>Pensando no cliente em primeiro lugar</h3>
          <h3>e imbuído em oferecer produtos de alta qualidade.</h3>
          <h3>
            Utilizo minhas habilidades em desenvolvimento web, <br /> web design
            e UX design para atender suas expectativas{" "}
          </h3>
          <h3> e satisfazer nossos clientes!</h3>
        </motion.div>
        <motion.section
          className="about__projects"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h3 className="projects__heading">Meu Trabalho</h3>
          <div className="projects__section">
            <ProjectThumb />
            <h4 className="project__description">
              Landign page para serviços de TI.
            </h4>
          </div>
        </motion.section>

        <motion.section
          className="about__skills"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h3>Minhas Habilidades</h3>
          <SkillsTopic
            fnc={() => showDetails("development")}
            title="Desenvolvimento web"
          />
          <AnimatePresence>
            {isOpen === "development" && (
              <SkillsList list={developmentSkills} key="development" />
            )}
          </AnimatePresence>
          <hr />
          <SkillsTopic fnc={() => showDetails("design")} title="UI/UX Design" />
          {isOpen === "design" && (
            <SkillsList list={designSkills} key="design" />
          )}
          <hr />
        </motion.section>
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
    </motion.div>
  );
};

export default About;
