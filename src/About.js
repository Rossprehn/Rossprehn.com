import React from 'react'

function About(props) {
  const AboutDiv = props.theme

  return (
    <AboutDiv>
      <div id="about" className="about">
        <h2>About Me</h2>
        <p>
          Full-stack web developer passionate about writing clean, functional code focused on
          solving human problems while maintaining an eye for detail and design. Enjoys working with
          teammates toward a common goal. When I’m not coding, I’m probably either biking, mixing
          drinks for friends, playing with my cats or playing board games.
        </p>
      </div>
    </AboutDiv>
  )
}

export default About
