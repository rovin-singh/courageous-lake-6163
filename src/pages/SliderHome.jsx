import React, { useState } from "react";
import "./Slider.css";
import { Container } from "react-bootstrap";
const SliderHome = () => {
  const [show, setShow] = useState(true);
  function openCity(evt, cityName) {
    setShow(false);
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <Container>
      <div class="tab">
        <button
          class="tablinks"
          onMouseEnter={(e) => openCity(e, "London", `displayNone`)}
          onMouseLeave={() => setShow(false)}
        >
          London
        </button>
        <button
          class="tablinks"
          onMouseEnter={(e) => openCity(e, "Paris")}
          onMouseLeave={() => setShow(false)}
        >
          Paris
        </button>
        <button
          class="tablinks"
          onMouseEnter={(e) => openCity(e, "Tokyo")}
          onMouseLeave={() => setShow(false)}
        >
          Tokyo
        </button>
      </div>
      {show ? (
        <div className="tabcontent">
          <img
            src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"
            alt="image"
            width="100%"
          />
        </div>
      ) : null}

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      {show ? <div></div> : null}
    </Container>
  );
};

export default SliderHome;
