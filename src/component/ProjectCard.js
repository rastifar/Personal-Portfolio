import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="containerStyle ">
          <img
            src={imgUrl}
            style={{ width: "420px", height: "300px", objectFit: "cover" }}
            alt={title}
          />
        </div>

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>
            <a href={projectUrl} target="blank">
              Live project Preview Link
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
