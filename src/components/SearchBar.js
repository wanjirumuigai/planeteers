import React, { useState } from "react";

function SearchBar({ handleSearch, handleSort }) {
  const [sort, setSort] = useState(false);
  function handleKeyUp(e) {
    handleSearch(e);
  }
  function handleOnCheckChange() {
    handleSort();
  }

  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <label>
        search
        <input
          onKeyUp={handleKeyUp}
          className="searchTerm"
          placeholder="Who would you like to search?"
        ></input>
      </label>
    </div>
  );
}

export default SearchBar;
