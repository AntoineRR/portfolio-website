import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

import * as styles from './styles/project.module.css';

const Technology = (props) => {
  return (
    <div className={styles.techContainer + " rounded-pill px-2 py-1 me-2 my-2"}>
      <p className={styles.tech + " m-0"}>{props.technology}</p>
    </div>
  )
}

const Project = (props) => {
  const image = getImage(props.data.image)
  return (
    <div className="col-6 p-5 overflow-hidden">
      <div className={styles.bgImageContainer}>
        <GatsbyImage style={{position: "absolute"}} className={styles.bgImage} image={image} alt="Project image"/>
        <div className={styles.content}>
          <h2 className={styles.title}>{props.data.title}</h2>
          <div className="d-flex">
            {
              props.data.technologies.map(node =>(
                <Technology technology={node}></Technology>
              ))
            }
          </div>
          <p>{props.data.description}</p>
          <a className={styles.link} href={props.data.link}>See more</a>
        </div>
      </div>
    </div>
  )
}

export default Project