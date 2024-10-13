import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Images from "../assets/index";
import PercentageSVG from "./PercentageSVG";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="overview">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Portfolio Overview</h2>
              <p>
                This portfolio showcases the projects and exercises I completed
                during my React.js bootcamp, as well as additional individual
                projects I undertook during this period. It highlights my
                journey and growth in mastering React.js, demonstrating the
                skills and knowledge I acquired through hands-on experience.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={"skill-slider"}
              >
                <div className="item">
                  {/* <img src={Images.meter1} alt="image" /> */}
                  <PercentageSVG percentage={"80"} />
                  <h5>Html/CSS</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter2} alt="image" /> */}
                  <PercentageSVG percentage={"90"} />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"80"} />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"85"} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"85"} />
                  <h5>Material-UI</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"90"} />
                  <h5>Styled-components</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"60"} />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  {/* <img src={Images.meter3} alt="image" /> */}
                  <PercentageSVG percentage={"50"} />
                  <h5>JQuery</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={Images.colorSharp}
        alt="image"
        className="background-image-left"
      />
    </section>
  );
};

export default Skills;
