import React from 'react';
import narutoImg from '../../assets/img/me.jpg'
import './AboutPage.css';



const About: React.FC = () => {
    return (
        <div className="wrapper">
        <main className='about'>
            <header>
                <h2>Crio sites e desenvolvo aplicações web</h2>
            </header>
        {/* <section className="about__text">
        <p>Eu sou um desenvolvedor web, com foco em front-end e tenho conhecimentos básicos em desenvolvimento back-end.</p>
        <p>Amo criar interfaces e por isso estou constantemente buscando aprimorar meu conhecimento em web design.</p>
        </section> */}
        <section className="about__presentation">
            <h3>Meu objetivo principal é <span>criar a melhor solução </span> e <span>entregar o melhor resultado</span> para o seu negócio!</h3>
        </section>
        
        <hr/>
        <article className="about__skills">
            <h3>Habilidades</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
                <li>Lógica de Programação</li>
                <li>Figma</li>
            </ul>
        </article>
        {/* <article className="about__text">
            <p>Tenho experiências profissionais que me fizeram desenvolver habilidades interpessoais importantíssimas como comunicação,trabalho em equipe e resolução de problemas.</p>
            <h3>Mergulho fundo no projeto para obter resultados positivos</h3>
            <p>Minha dedicação e vontade de aprender são o meu diferencial para ter sucesso em todos os meus desafios.</p>
            <blockquote>Ninguém que deu o melhor de si se arrependeu</blockquote>
        </article> */}
        </main>

        {/* carrousel 
        
    */}
        <div className="carrouselContainer">
        <div className="imageContainer">
        <div className="imageItem">
        <img src={narutoImg} alt="Naruto"/>
        <img src={narutoImg} alt="Naruto"/>
        <img src={narutoImg} alt="Naruto"/>
        </div>
        </div>
        </div>
        </div>

    );
}

export default About;