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
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          technologies
        }
      }
    }
  }`)

  return (
    <main>
      <Container id="projects" className="d-flex justify-content-center">
        <div className="row justify-content-center">
          {
            data.allDataJson.edges.map(node => (
              <Project data={node.node}></Project>
            ))
          }
        </div>
      </Container>
    </main>
  )
}

export default Projects