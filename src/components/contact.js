import * as React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <main>
      <Container id="contact" className="d-flex justify-content-center align-items-center text-center">
        <div>
          <h2>Thank you for going through this website!</h2>
          <p>Here are my contact information for more details:</p>
          <div className="d-flex justify-content-center">
            <p className="m-3"><a href="mailto:ant.romero2@orange.fr" aria-label="Mail"><FaEnvelope className="mx-3" size={28}/></a>ant.romero2@orange.fr</p>
            <p className="m-3"><a href="tel:+33674488000" aria-label="Phone"><FaPhone className="mx-3" size={28}/></a>+33 6 74 48 80 00</p>
          </div>
          <div className="d-flex justify-content-center">
            <a href="https://github.com/AntoineRR" aria-label="GitHub" className="m-3"><FaGithub size={42}/></a>
            <a href="https://www.linkedin.com/in/antoine-romero-romero-b28094162/?locale=en_US" aria-label="Linkedin" className="m-3"><FaLinkedin size={42}/></a>
          </div>
          <div className="my-5"></div>
        </div>
      </Container>
    </main>
  )
}

export default Contact