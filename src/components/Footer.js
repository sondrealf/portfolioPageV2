import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col
            size={12}
            sm={6}
            style={{
              marginTop: "20px",
            }}
          >
            <p
              style={{ 
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              SONDRE ALFNES
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{
                marginTop: "20px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/sondre-alfnes-2243331b3/"
                style={{ marginRight: "10px" }}
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/sondrealf">
                <img src={github} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
