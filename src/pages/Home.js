import React from "react";
import NavBar from "../components/NavBar";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";
import image10 from "../assets/images/10.png";
import image11 from "../assets/images/11.png";
import image12 from "../assets/images/12.png";
import "../css/main.css";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner mt-4 pt-1 custom_carousel">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image5} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image6} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image7} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image8} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image9} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image10} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image11} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image12} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
