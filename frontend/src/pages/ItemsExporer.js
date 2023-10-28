import React, { useContext, useEffect } from "react";
import ItemPresentation from "../components/ItemPresentation";
import { ItemsContext } from "../context/ItemsContext";
import itemsData from "../data/items.json";
import style from "../styles/ItemsExporer.module.css";
import { UserContext } from "../context/UserContext";
import currentUser from "../data/user.json";

function ItemsExporer() {
  const { items, setItems } = useContext(ItemsContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(currentUser);
  }, []);
  useEffect(() => {
    setItems(itemsData);
  }, []);

  return (
    <div className={style.mainContainer}>
      <h1>Search for Items</h1>
      <div className={style.gridContainer}>
        {items.map((item, index) => {
          if (item.status === "disponibil") {
            return (
              <div key={index}>
                <ItemPresentation item={item} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ItemsExporer;
