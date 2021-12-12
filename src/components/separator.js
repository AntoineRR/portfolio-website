import * as React from "react";
import { Container } from "react-bootstrap";

import DownArrow from "./../../content/assets/down_arrow.svg";

const Separator = () => {
  return (
    <Container className="d-flex justify-content-center">
      <DownArrow className="my-5"></DownArrow>
    </Container>
  )
}

export default Separator;