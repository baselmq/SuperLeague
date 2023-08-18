import React from "react";
import logo from "../assets/icons/logo.svg";
import IconSocialMedia from "../components/IconSocialMedia.js";
import "../css/main.css";
const Footer = () => {
  return (
    <div className="container-fluid p-5 custom__footer">
      <div className="row ">
        <div className="col-lg-6">
          <img className="logo__footer mb-5" src={logo} alt="logo" />
          <p>© 2023 EUROPEAN SUPER LEAGUE COMPANY, S.L. | PRIVACY POLICY</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <IconSocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
