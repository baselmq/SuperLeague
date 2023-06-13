import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import Search from "./Search";
import { SearchBar } from "./SearchBar";
import "bootstrap/dist/css/bootstrap.css";
import "../css/main.css";
import { SearchResultsList } from "./SearchResultsList";
const NavBar = () => {
  const [results, setResults] = useState([]);

  return (
    <nav className="px-5 navbar navbar-expand-lg  fixed-top custom__nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/clubs">
                Clubs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                About us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-scroll">
            <form className="d-flex" role="search">
              <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && (
                  <SearchResultsList results={results} />
                )}
              </div>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
