import { useEffect, useState } from "react";
import "../css/searchBar.css";
import searchIcon from "../assets/icons/search.svg";
import clubsData from "../data/clubs";
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const search = (event) => {
    let query = event.target.value;

    let updatedList = clubsData.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    query.trim() === "" ? setResults("") : setResults(updatedList);
    query.trim() === "" ? setInput("") : setInput(updatedList);
  };
  const sizeIcon = {
    width: "20px",
    height: "20px",
  };
  useEffect(() => {}, [input]);

  return (
    <div className="input-wrapper form-control">
      <img style={sizeIcon} src={searchIcon} alt="" />
      <input
        className=" me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={search}
      ></input>
      {/* <input placeholder="Type to search..." onChange={search} /> */}
    </div>
  );
};
