import React from 'react'
import {projects} from "../data/ProjectsData"
import Project from './Project'

function Projects() {
  let projectElements = projects.map(proj => {
    return <Project proj={proj} />
  })

  return (
    <div>
      <h2>Projects</h2>
      {projectElements}
    </div>
  )
}

export default Projects