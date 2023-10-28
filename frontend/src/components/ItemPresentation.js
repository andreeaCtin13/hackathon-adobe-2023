import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/ItemPresentation.module.css";
function ItemPresentation({ item }) {
  return (
    <div className={style.containerCard}>
      <Link to={`/items/${item.id}`}>
        <img src={item.imagine} alt="imagine_item" />
        <h2>{item.denumire}</h2>
        <div>{item.descriere}</div>
      </Link>
    </div>
  );
}

export default ItemPresentation;
