import * as React from 'react'

import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  return (
    <main>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}

export default IndexPage