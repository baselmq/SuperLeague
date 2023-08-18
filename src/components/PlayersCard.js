import React from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const PlayersCard = (props) => {
  return (
    <div className="card__player">
      <img className="image__player" src={props.data.photo} alt="" />
      <h4 className="ps-2 pt-3">{props.data.number}</h4>
      <h5 className="ps-2">{props.data.name}</h5>
      <h6 className="ps-2">{props.data.position}</h6>
    </div>
  );
};

export default PlayersCard;
