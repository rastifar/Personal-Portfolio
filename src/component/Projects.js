import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Images from "../assets";
import "animate.css";
import TrackVisibility from "react-on-screen";

const guidedProjects = [
  {
    title: "Cloud Hosting Website",
    description: "HTML & CSS & Font Awesome",
    imgUrl: Images.hostingsite,
    projectUrl:
      "https://rastifar.github.io/Cloud-Hosting-Website-html-css-responsive/",
    // imgUrl: Images.projectImg1,
  },

  {
    title: "Budget Application",
    description: "ReactJs & Bootstrap & Context",
    imgUrl: Images.buggetApp,
    projectUrl: "https://rastifar.github.io/BudgetApplication-ReactJs/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Design Mockups",
    description: "HTML & CSS",
    imgUrl: Images.mocksite,
    projectUrl:
      "https://rastifar.github.io/html-tailwind-exercise-traversyMedia/",
    // imgUrl: Images.projectImg1,
  },
  {
    title: "Digikala Old Version Mockup",
    description: "Html & /bootstrap",
    imgUrl: Images.digi,
    projectUrl:
      "https://rastifar.github.io/digikala-mock-website-old-version-simplified/",
    // imgUrl: Images.projectImg2,
  },
  {
    title: "Pizza Builder",
    description: "ReactJs & Formik & Bootstrap",
    imgUrl: Images.pizzaBuilder,
    projectUrl: "https://rastifar.github.io/Pizza-Builder-Formik-React/",
    // imgUrl: Images.projectImg2,
  },
  {
    title: "Pizza Resturant Website",
    description: "ReactJs & Styled-Component",
    imgUrl: Images.pizzaRresturant,
    projectUrl: "https://rastifar.github.io/PizzaResturantWebsite-Reactjs/",
    // imgUrl: Images.projectImg3,
  },
];
const myProjects = [
  {
    title: "Country Flags",
    description: "React & Context & light/Dark them & Scss",
    imgUrl: Images.countryflag,
    projectUrl: "https://rastifar.github.io/countryInfo/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Skill portfolio",
    description: "React & Material ",
    imgUrl: Images.skillportfolio,
    projectUrl: "https://rastifar.github.io/skillPortfolio/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Tic Tak Toe",
    description: "HTML & Css & Js",
    imgUrl: Images.tictaktoe,
    projectUrl: "https://rastifar.github.io/tic-tak-toe/",
    // imgUrl: Images.projectImg3,
  },

  {
    title: "Todo App Html-Css-Js",
    description: "Html & Css & JS & dark light Theme",
    imgUrl: Images.Todo1,
    projectUrl: "https://rastifar.github.io/Todo-HTML-CSS/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Todo app React",
    description: "ReactJs & Bootstrap",
    imgUrl: Images.todoReact,
    projectUrl: "https://rastifar.github.io/Todo-js/",
    // imgUrl: Images.projectImg2,
  },
  {
    title: "JQuery CRUD Table",
    description: "JQuery & bootstrap",
    imgUrl: Images.JqueryCrudTable,
    projectUrl: "https://rastifar.github.io/Jquery-CRUD-Table/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Fetching a list and Select it's items",
    description: "React & Scss & Styled-component",
    imgUrl: Images.listSelection,
    projectUrl: "https://rastifar.github.io/17/",
    // imgUrl: Images.projectImg3,
  },
  {
    title: "Creating a responsive website",
    description: "HTML & Bootstrap",
    imgUrl: Images.htlmBootstrap,
    projectUrl: "https://rastifar.github.io/HTML_BOOTSTRAP/",
    // imgUrl: Images.projectImg1,
  },
  {
    title: "Resume Template",
    description: "Html & Bootstrap ",
    imgUrl: Images.resumelayout,
    projectUrl: "https://rastifar.github.io/Resume-file-layout-bootstrap/",
    // imgUrl: Images.projectImg3,
  },

  {
    title: "Design Mockups",
    description: "HTML & CSS",
    imgUrl: Images.blog,
    projectUrl: "https://rastifar.github.io/HTML-CSS_MyBlog/",
    // imgUrl: Images.projectImg1,
  },
  {
    title: "JQuery Accardion",
    description: "JQuery & bootstrap",
    imgUrl: Images.JqueryAccardion,
    projectUrl: "https://rastifar.github.io/Jquery-Accardion/",
    // imgUrl: Images.projectImg2,
  },

  {
    title: "Mocking a Website",
    description: "HTML & Css",
    imgUrl: Images.Behine,
    projectUrl: "https://rastifar.github.io/Behine-webpage-html-css/",
    // imgUrl: Images.projectImg3,
  },

  // {
  //   title: "Responsive Form using Scss",
  //   description: "HTML & Scss",
  //   imgUrl: Images.responsiveForm,
  //   projectUrl: "https://rastifar.github.io/Responsive-form-scss/",
  //   // imgUrl: Images.projectImg3,
  // },
];

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Guided Code</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Bootcapmt Projects
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third"></Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {guidedProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {myProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={Images.colorSharp2}></img>
    </section>
  );
};

export default Projects;
