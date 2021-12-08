import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './project';

const Projects = () => {
  const data = useStaticQuery(graphql`
  query {
    allDataJson {
      edges {
        node {
          date
          description
          link
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          technologies
        }
      }
    }
  }`)

  return (
    <main>
      <div className="w-100 py-5"></div>
      <Container id="projects" className="d-flex justify-content-center">
        <div className="w-100 row justify-content-center">
          {
            data.allDataJson.edges.map(node => (
              <Project data={node.node}></Project>
            ))
          }
        </div>
      </Container>
      <div className="w-100 py-5"></div>
    </main>
  )
}

export default Projects