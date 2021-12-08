import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const Project = (props) => {
  const image = getImage(props.data.image)
  return (
    <div className="col-6">
      {console.log(props.data)}
      <GatsbyImage image={image} alt="Project image"/>
      <h2>{props.data.title}</h2>
    </div>
  )
}

export default Project