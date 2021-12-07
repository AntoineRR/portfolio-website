import * as React from "react";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const About = () => {
  return (
    <main>
      <Container id="about" className="vh-100 d-flex">
        <div className="row w-100">
          <div className="col-5 d-flex align-items-center">
            <StaticImage src="../images/profile_pic.jpg" alt="Profile picture" className="rounded-circle border border-5 border-primary"></StaticImage>
          </div>
          <div className="col-1"></div>
          <div className="col d-flex align-items-center justify-content-center text-center">
            <div>
              <h2 className="m-3">Welcome to my portfolio website!</h2>
              <p>I'm a graduated french engineer from Ecole Centrale de Nantes and this website is here to gather all the personal projects I worked on during my free time!</p>
              <p>They were created using different programming languages and technologies. I like to try different things and want to stay open minded!</p>
              <p>I am currently looking for a job and am available now!&nbsp;
                <AnchorLink to="/#contact">Contact me</AnchorLink>
                &nbsp;for more information.
              </p>
              <p>Feel free to check my work on the following section!</p>
              <a href="https://drive.google.com/uc?id=1y09QuOOGm3h2oUk39RCqE5qGzsJx6nPH&export=download"
                className="btn btn-primary primary m-3 rounded-pill btn-lg px-5" role="button" download>Download CV</a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default About