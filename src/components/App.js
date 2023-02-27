import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App({ ageArray }) {
  const [planeteers, setPlaneteers] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const url = "http://localhost:8003/planeteers";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlaneteers(data);
        setSearchItems(data);
      });
  }, []);

  function updatePlaneteer(obj) {
    setSearchItems([...searchItems, obj]);
  }
  function handleSearch(e) {
    const searchMatch = planeteers.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.bio.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchItems(searchMatch);
  }

  return (
    <div>
      <Header />
      <SearchBar
        planeteers={planeteers}
        setPlaneteers={setPlaneteers}
        handleSearch={handleSearch}
      />
      <RandomButton planeteers={planeteers} updatePlaneteer={updatePlaneteer} />

      <PlaneteersContainer planeteers={searchItems} />
    </div>
  );
}

export default App;
