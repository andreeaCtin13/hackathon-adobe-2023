import React from "react";

function Card({ item }) {
  return (
    <div>
      <h2>{item.denumire}</h2>
      <img src={item.imagine} alt={item.denumire} />
    </div>
  );
}

export default Card;
