import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  return (
    <main>
      <Home></Home>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand href="#home">ARR</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="border rounded m-2" href="#home">Home</Nav.Link>
          <Nav.Link className="border rounded m-2" href="#about">About</Nav.Link>
          <Nav.Link className="border rounded m-2" href="#projects">Projects</Nav.Link>
          <Nav.Link className="border rounded m-2" href="#contact">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}

export default IndexPage