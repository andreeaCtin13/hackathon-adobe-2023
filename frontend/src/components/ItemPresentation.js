import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/ItemPresentation.module.css";
function ItemPresentation({ item }) {
  const ret = () => {
    if (item.descriere.length > 50) {
      let desc = item.descriere.slice(0, 30);
      desc += "... see more";
      return desc;
    } else {
      return item.descriere;
    }
  };

  return (
    <div className={style.containerCard}>
      <Link to={`/items/${item.id}`} className={style.link}>
        <img src={item.imagine} alt="imagine_item" width="400" height="400" />
        <h2>{item.denumire}</h2>
        <div>{ret()}</div>
      </Link>
    </div>
  );
}

export default ItemPresentation;
