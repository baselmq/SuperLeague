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
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner mt-4 pt-1 custom_carousel">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image10} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image11} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image12} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div> */}

      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image10} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image11} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image12} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
