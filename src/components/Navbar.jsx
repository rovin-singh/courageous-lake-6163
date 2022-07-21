import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserAlt, FaRegHeart, FaCartPlus, FaSearch } from "react-icons/fa";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const NavbarTop = () => {
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
            <Nav.Link href="#action1">
              <span style={{ padding: "10px", alignContent: "center" }}>
                <FaUserAlt />{" "}
              </span>{" "}
              Sign In
            </Nav.Link>
            <Nav.Link href="#action1">
              <span style={{ padding: "10px", alignContent: "center" }}>
                <FaRegHeart />{" "}
              </span>{" "}
              Favourites
            </Nav.Link>
            <Nav.Link href="#action1">
              <span style={{ padding: "10px", alignContent: "center" }}>
                <FaCartPlus />{" "}
              </span>{" "}
              Cart
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
