import React from 'react';
import './Card.css';

 interface Card {
    title: string;
    image: string;
    description: string;
    site: string;
}   

interface Props {
    projects: Array<Card>;
}

const Cards: React.FC<Props> = ({ projects }) => {
    return (
        <main className='cards'>
            {projects.map((project) => {
                return (
                    <section className="card">
                        <a href={project.site} target="_blank" rel="noreferrer">
                        <img className="card__image" src={project.image} alt={project.title} />
                        <section className="card__text">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </section>
                        </a>
                    </section>
                )
            })}
            </main>
    )
        }
export default Cards;