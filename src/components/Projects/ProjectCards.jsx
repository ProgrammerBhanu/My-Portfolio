import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          size="sm"
          className="mr-2"
          variant="primary"
          href={props.link1}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button size="sm" variant="primary" href={props.link2} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Deployment"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
