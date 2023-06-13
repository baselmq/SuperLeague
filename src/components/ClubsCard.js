import React from "react";
import "../css/main.css";
import clubsData from "../data/clubs";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const ClubsCard = (props) => {
  return (
    <div className="col-lg-3" key={props.index}>
      <Link
        className="text-decoration-none"
        to={`/details?id=${encodeURIComponent(props.index)}`}
      >
        <div className="card custom__card p-4">
          <img className="image__club" src={props.image} alt="..." />
          <div className="card-body">
            <h5>{props.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClubsCard;
