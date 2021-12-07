import * as React from "react";
import Container from 'react-bootstrap/Container';

import { AnchorLink } from "gatsby-plugin-anchor-links";

import * as styles from './styles/home.module.css';

const Home = () => {
  return (
    <main>
      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <div className={styles.centeredContainer}>
          <div className="text-center">
            <h1>Hi, I'm Antoine Romero-Romero</h1>
            <h2 className={styles.descriptionText}>French Sofware Development Engineer</h2>
          </div>
          <div className={styles.separator}></div>
          <div className="d-flex justify-content-center row">
            <AnchorLink className="btn btn-outline-primary primary m-3 rounded-pill btn-lg col-sm-2" role="button" to="/#about">About</AnchorLink>
            <AnchorLink className="btn btn-outline-primary primary m-3 rounded-pill btn-lg col-sm-2" role="button" to="/#projects">Projects</AnchorLink>
            <AnchorLink className="btn btn-outline-primary primary m-3 rounded-pill btn-lg col-sm-2" role="button" to="/#contact">Contact</AnchorLink>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Home