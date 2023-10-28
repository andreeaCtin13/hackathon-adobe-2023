import React from "react";

function Card({ item, modifySet }) {
  const onCheck = (e) => {
    modifySet(item.id, e.target.checked);
  };

  return (
    <div>
      <h2>{item.denumire}</h2>
      <img src={item.imagine} alt={item.denumire} />
      <input type="checkbox" onChange={(e) => onCheck(e)} />
    </div>
  );
}

export default Card;
