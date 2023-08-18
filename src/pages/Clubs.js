import React from "react";
import ClubsCard from "../components/ClubsCard";
import clubsData from "../data/clubs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Clubs = () => {
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="row mt-4 p-lg-5 p-md-3 pt-md-5 row-gap-4 custom__body">
          {clubsData.map((club, index) => {
            return (
              <div className="col-lg-3 col-md-4" key={index}>
                <ClubsCard index={index} image={club.image} name={club.name} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clubs;
