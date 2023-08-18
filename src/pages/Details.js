import React from "react";
import NavBar from "../components/NavBar";
import clubsData from "../data/clubs";
import PlayersCard from "../components/PlayersCard";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function Details() {
  const renderPlayers = (startIndex, endIndex) => {
    return clubsData[id].players
      .slice(startIndex, endIndex)
      .map((player, index) => (
        <div
          className="col-lg-3 col-md-6 d-flex justify-content-center"
          key={index}
        >
          <PlayersCard data={player} />
        </div>
      ));
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const styleCustom = {
    width: " 400px",
    height: "470px",
  };
  return (
    <>
      <NavBar />
      <div className="container-fluid p-5 mt-5 custom__details">
        <div className="row">
          <h1 className="name__club text-center mb-3 pb-4 d-lg-none d-md-block d-sm-block">
            {clubsData[id].name}
          </h1>
          <div className="col-lg-4 col-md-12 text-center d-flex justify-content-center">
            <div style={styleCustom} className="mb-5">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front p-4">
                    <img
                      src={clubsData[id].image}
                      alt={clubsData[id].name}
                      className="details_image_club"
                    />
                  </div>
                  <div className="flip-card-back p-4">
                    <h5 className="text-start">
                      The club was formed in: {clubsData[id].date_of_creation}
                    </h5>
                    <h5 className="text-start">
                      Country: {clubsData[id].country}
                    </h5>
                    <p className="text-start">{clubsData[id].information}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 mt-4 ">
            <h1 className="name__club text-center mb-5 pb-4 d-lg-block d-md-none d-none">
              {clubsData[id].name}
            </h1>
            <h3 className="text-center mb-5">Football honours</h3>

            <div className="row d-flex gap-1">
              {clubsData[id].trophies.map((club, index) => (
                <div
                  className="col text-center trophies__card mt-2"
                  key={index}
                >
                  <img
                    src={club.image}
                    alt={club.name}
                    className="trophies__img"
                  />
                  <div className="trophies__count">{club.count}</div>
                  <div className="trophies__name">{club.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h5 className="text-center my-5 fw-normal">GOALKEEPERS</h5>
      <div className="container">
        <div className="row  pb-5 d-flex justify-content-center">
          {renderPlayers(0, 1)}
        </div>
      </div>

      <h5 className="text-center my-5 fw-normal">DEFENDERS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4">{renderPlayers(1, 5)}</div>
      </div>

      <h5 className="text-center my-5 fw-normal">MIDFIELDERS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4">{renderPlayers(5, 9)}</div>
      </div>

      <h5 className="text-center my-5 fw-normal">FORWARDS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4 d-flex justify-content-center">
          {renderPlayers(9, 11)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
