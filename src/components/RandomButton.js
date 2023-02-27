import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ planeteers, updatePlaneteer }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    // console.log("For the advanced deliverables", randomPlaneteer);
    fetch("http://localhost:8003/planeteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(randomPlaneteer),
    })
      .then((res) => res.json())
      .then((data) => {
        updatePlaneteer(data);
      });
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
