import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vamos.png";
import portfoliov2 from "../assets/img/portfoliov2.png";
import portfoliov1 from "../assets/img/portfoliov1.png";
import cvSite from "../assets/img/cvSite.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio v2",
      description: "This website",
      imgUrl: portfoliov2,
      siteUrl: "#",
    },
    {
      title: "Backpack Trip",
      description: "Design & Development of a travel website",
      imgUrl: projImg1,
      siteUrl: "https://pu.alfnes.dev/",
    },
    {
      title: "Portfolio v1",
      description: "My first portfolio website",
      imgUrl: portfoliov1,
      siteUrl: "https://old.alfnes.dev/",
    },
    {
      title: "CV Site",
      description: "My CV website",
      imgUrl: cvSite,
      siteUrl: "https://cv.alfnes.dev/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of the projects I have worked on</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> Temporary empty </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> Temporary empty </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
