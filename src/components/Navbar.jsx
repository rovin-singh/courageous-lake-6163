import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt, FaRegHeart, FaCartPlus, FaSearch } from "react-icons/fa";
import { Container, Form, Nav, Navbar, Card, Button } from "react-bootstrap";

const NavbarTop = () => {
  const state = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" as={Link} to="/">
          <img
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
            alt="brand-icon"
            width="220px"
            height="50px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex searchClass">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 main-search"
              aria-label="Search"
            />
            <div className="searchIcon">
              <FaSearch />
            </div>
          </Form>
          <div className="d-flex">
            <Nav.Link className="login_container" onMouseOver={handleShow} >
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaUserAlt />{" "}
              </span>{" "}
              Sign In
            </Nav.Link>

            {show && 
            <div className="login_div" onMouseOver={handleShow} onMouseOut={handleClose}>
              <Card style={{textAlign:"left"}}>
                <Card.Body>
      
                  <Card.Text>
                  <p className="text-left">Welcome to Gearbest</p>
                    <Button variant="warning" className="btn-cutomize">Sign In</Button>
                  </Card.Text>
                  <p>Register on Gearbest: Earn 10 points</p>
                  <Button variant="primary" className="btn-cutomize">Register</Button>
                </Card.Body>
              </Card>
            </div>
}
            <Nav.Link href="#action1">
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaRegHeart />{" "}
              </span>{" "}
              Favourites
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaCartPlus />
              </span>{" "}
              Cart
              <span className="total">{state.data.length}</span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
