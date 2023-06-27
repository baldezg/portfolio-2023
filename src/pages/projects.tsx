import React from 'react'
import Card from '../components/card/Card'
import projects from '../assets/js/projectsList';

function Projects() {
  return (
      <>
          <h1>Projetos</h1> 
            <Card projects={projects}/>
      </>
  )
}

export default Projects
