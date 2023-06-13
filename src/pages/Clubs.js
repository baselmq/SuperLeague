import React from "react";
import ClubsCard from "../components/ClubsCard";
import clubsData from "../data/clubs";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
const Clubs = () => {
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="row mt-4 p-5 row-gap-4 custom__body">
          {clubsData.map((club, index) => {
            return (
                <ClubsCard index={index} image={club.image} name={club.name} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Clubs;
