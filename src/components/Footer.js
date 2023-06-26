import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

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
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{
                marginTop: "20px",
              }}
            >
              <a href="https://www.linkedin.com/in/sondre-alfnes-2243331b3/">
                <img src={navIcon1} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
