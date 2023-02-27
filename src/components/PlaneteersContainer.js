import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  return (
    <ul className="cards">
      {/* render a list of <Planeteer> components in here */}
      <Planeteer planeteers={planeteers} />
    </ul>
  );
}

export default PlaneteersContainer;
