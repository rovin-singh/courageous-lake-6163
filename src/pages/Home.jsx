import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Pages.module.css"
import SliderHome from "./SliderHome";
const Home = () => {
  return (
    <Container className={styles.home_main}>
      <SliderHome/>
     <h4> COLLECTION</h4>
     <h4> SUPER DEALS</h4>
     <h4> NEW</h4>
     <h4> RECOMMENDED FOR YOU</h4>
    </Container>
  );
};

export default Home;
