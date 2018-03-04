import React from "react";
import bgimage from "../seamless-background-80s11-.jpg";
import GitHubImg from "./github-logo.png";
import LinkedInImg from "./linkedin.png";
import EmailImg from "./opened-email-envelope.png";

function Contact(props) {
  const ContactDiv = props.theme;

  return (
    <ContactDiv>
      <div id="contact" className="contact">
        <h2>Contact Me</h2>
        <div>
          <a href="https://github.com/collinsbj">
            <img src={GitHubImg} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/bjcollinswebdev/">
            <img src={LinkedInImg} alt="LinkedIn" />
          </a>
          <a href="mailto:collinsbj@me.com">
            <img src={EmailImg} alt="Email" />
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;

// const eighties = styled.div`
//   div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 30vh;
//     background-image: url(${bgimage});
//   }

//   h2 {
//     transform: rotate(-15deg);
//     font-size: 65px;
//     margin-left: 3rem;
//     align-self: center;
//     font-family: "Permanent Marker", cursive;
//     font-variant: small-caps;
//     background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;
