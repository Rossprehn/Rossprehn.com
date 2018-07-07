import React from 'react'
import MindTime from './MindTime.png'
import Roominate from './Roominate.png'
import Lol from './Lol.png'
import Weredar from './Weredar.png'

function Projects(props) {
  const ProjectsDiv = props.theme

  return (
    <ProjectsDiv>
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projectsList">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Rossprehn/mind-time"
            className="container"
          >
            <img src={MindTime} alt="MindTime" />
            <div className="overlay">
              <div className="text">Mind Time</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://roominate-af37c.firebaseapp.com/"
            className="container"
          >
            <img src={Roominate} alt="Roominate" />
            <div className="overlay">
              <div className="text">Roominate</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://weredar-1.firebaseapp.com/"
            className="container"
          >
            <img src={Weredar} alt="Weredar" />
            <div className="overlay">
              <div className="text">Weredar</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lol-planner.firebaseapp.com/"
            className="container"
          >
            <img src={Lol} alt="Lol" />
            <div className="overlay">
              <div className="text">Lol</div>
            </div>
          </a>
        </div>
      </div>
    </ProjectsDiv>
  )
}

export default Projects
