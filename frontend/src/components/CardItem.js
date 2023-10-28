import React from "react";

function CardItem({ item }) {
  return (
    <div>
      <h2>{item.denumire}</h2>
      <div>{item.descriere}</div>
    </div>
  );
}

export default CardItem;
