import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import style from "../styles/UserItem.module.css";
import currentUser from "../data/user.json";
import CardItem from "../components/CardItem";
import { ItemsContext } from "../context/ItemsContext";

function UserItem() {
  const { user, setUser } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    const updatedUser = { ...user };
    updatedUser.items[1].status = "locked";
    setUser(updatedUser);
  }, [setUser]);

  const [selectedItem, setSelectedItem] = useState("disponibil");
  const changeSelectedItem = (e) => {
    setSelectedItem(e.target.value);
  };

  let itemsDisponible = user.items.filter(
    (item) => item.status === "disponibil"
  );

  let itemsLocked = user.items.filter((item) => item.status === "locked");

  let itemsOwned = user.items.filter((item) => item.status === "owned");

  const showDisponibili = () => {
    return (
      <div>
        {itemsDisponible.map((x, index) => {
          return <CardItem item={x} key={index} />;
        })}
      </div>
    );
  };

  const showLocked = () => {
    return (
      <div>
        {itemsLocked.map((x, index) => {
          return <CardItem item={x} key={index} />;
        })}
      </div>
    );
  };

  const showOwned = () => {
    return (
      <div>
        {itemsOwned.map((x, index) => {
          return <CardItem item={x} key={index} />;
        })}
      </div>
    );
  };

  return (
    <div className={style.mainContainer}>
      <select name="" id="" onChange={(e) => changeSelectedItem(e)}>
        <option value="disponibil">disponibil</option>
        <option value="owned">owned</option>
        <option value="locked">locked</option>
      </select>

      {selectedItem === "disponibil"
        ? showDisponibili()
        : selectedItem === "locked"
        ? showLocked()
        : showOwned()}
    </div>
  );
}

export default UserItem;
