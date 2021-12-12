import * as React from 'react'

import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Separator from '../components/separator';

const IndexPage = () => {
  return (
    <main>
      <Home></Home>
      <Separator></Separator>
      <About></About>
      <Separator></Separator>
      <Projects></Projects>
      <Separator></Separator>
      <Contact></Contact>
    </main>
  )
}

export default IndexPage