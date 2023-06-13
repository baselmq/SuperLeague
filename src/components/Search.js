import React from "react";

function Search() {
  return (
    <div className="search-top">
      <div>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="search-result">
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
      </div>
    </div>
  );
}

export default Search;
