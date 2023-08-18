import React from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const ClubsCard = (props) => {
  return (
    <Link
      className="text-decoration-none"
      to={`/details?id=${encodeURIComponent(props.index)}`}
    >
      <div className="card custom__card p-4">
        <img className="image__club" src={props.image} alt={props.name} />
        <div className="card-body">
          <div className="card__name__club">
            <h5>{props.name}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClubsCard;
