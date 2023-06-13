import { useState } from "react";
import "../css/searchBar.css";
import clubsData from "../data/clubs";
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const search = (event) => {
    let query = event.target.value;

    let updatedList = clubsData.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setResults(updatedList);
    setInput(updatedList);
  };

  return (
    <div className="input-wrapper">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={search}
      ></input>
      {/* <input placeholder="Type to search..." onChange={search} /> */}
    </div>
  );
};
