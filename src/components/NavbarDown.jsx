import React from "react";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
const NavbarDown = () => {
  return (
    <div>
      <Container className="navbardown">
        <Row xs={2} lg={4}>
          <Col
            style={{
              backgroundColor: "black",
              color: "white",
              margin:"-7px",
              position:"relative",
              padding:"7px"

            }}
          >
           <span>Category</span>
          </Col>
          <Col>SUPER DEALS</Col>
          <Col>APP ONLY</Col>
          <Col>NEW ARRIVALS</Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarDown;
