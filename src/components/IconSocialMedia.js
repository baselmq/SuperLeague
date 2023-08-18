import React from "react";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const IconSocialMedia = () => {
  return (
    <div className="social__media__icon d-flex gap-4">
      <img src={facebook} alt="facebook logo" />
      <img src={linkedin} alt="linkedin logo" />
      <img src={twitter} alt="twitter logo" />
      <img src={instagram} alt="instagram logo" />
    </div>
  );
};
export default IconSocialMedia;
