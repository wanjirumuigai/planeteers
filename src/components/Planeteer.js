import React, { useState } from "react";

function Planeteer({ planeteers }) {
  const [bioOn, setBioOn] = useState(true);

  let year = new Date().getFullYear();

  function handleClick() {
    setBioOn((bioOn) => !bioOn);
  }

  return (
    <>
      {planeteers.map((item) => {
        return (
          <li className="cards__item" key={item.id}>
            <div className="card" key={item.id}>
              <>
                <img
                  key={item.id}
                  onClick={handleClick}
                  src={item.pictureUrl}
                  alt={item.name}
                  className="card__image"
                />
                <div className="card__content">
                  <div className="card__title">{item.name}</div>
                  <p className="card__text">{bioOn ? item.bio : item.quote}</p>
                  <div className="card__detail">
                    <p>{item.twitter}</p>
                    <br />
                    <p>{item.fromUSA ? "USA-BASED" : "WORKING OVERSEAS"}</p>
                  </div>
                  <p>Age: {year - item.born}</p>
                </div>
              </>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Planeteer;
