import React from 'react'
import GitHubImg from './github-logo.png'
import LinkedInImg from './linkedin.png'
import EmailImg from './email.png'

function Contact(props) {
  const ContactDiv = props.theme

  return (
    <ContactDiv>
      <div id="contact" className="contact">
        <h2>Contact Me</h2>
        <div>
          <a href="https://github.com/Rossprehn">
            <img src={GitHubImg} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/rossprehn/">
            <img src={LinkedInImg} alt="LinkedIn" />
          </a>
          <a href="mailto:johnross.prehn@gmail.com">
            <img src={EmailImg} alt="Email" />
          </a>
        </div>
      </div>
    </ContactDiv>
  )
}

export default Contact
