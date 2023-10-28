import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import { ItemsContext } from "../context/ItemsContext";
import style from "../styles/ItemPage.module.css";
import currentUser from "../data/user.json";
function ItemPage() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(currentUser);
  }, []);
  const { items, setItems } = useContext(ItemsContext);

  const { idItem } = useParams();
  const item = items.find((i) => {
    return i.id === Number(idItem);
  });
  const [tradeModal, setTradeModal] = useState(false);
  const handleTrade = () => {
    setTradeModal(true);
  };

  const [itemsSet, setItemsSet] = useState([]);

  const updateSet = (itemID, check) => {
    if (check) {
      setItemsSet([...itemsSet, itemID]);
    } else {
      setItemsSet(itemsSet.filter((id) => id !== itemID));
    }
  };

  const modify = () => {
    // se transforma din disponibil in locked elementele din set
    // cand se accepta amandoua, itemele din cellalt set trebuie sa devina locked
    // cand trade ul se petrece efectiv, trebuie sa devin owned

    let updatedItems = items.map((item) => {
      if (itemsSet.includes(item.id)) {
        console.log({ ...item, status: "locked" });
        return { ...item, status: "locked" };
      }
      return item;
    });
    console.log("Items", updatedItems);
    setItems([...updatedItems]);
    setTradeModal(false);
  };

  console.log(items);

  return (
    <div className={style.mainContainer}>
      <div>
        <h1>{item.denumire}</h1>
        <img
          src={item.imagine}
          alt={item.denumire}
          width="500"
          height="500"
          className={style.img}
        />
      </div>
      <div className={style.details}>
        <div>
          <strong>LOCATION: </strong>
          {item.locatie}
        </div>
        <div>{item.descriere}</div>
        <button onClick={handleTrade} className={style.btn}>
          Trade
        </button>
      </div>

      <Dialog visible={tradeModal} onHide={() => setTradeModal(false)}>
        <h1>Choose the items you want to trade</h1>
        {user.items.map((i) => {
          if (i.status === "disponibil") {
            return <Card item={i} modifySet={updateSet} key={i.id}></Card>;
          }
        })}
        <div className={style.zonaButoane}>
          <Link>
            <button
              onClick={() => {
                modify();
              }}
              className={style.btn}
            >
              Send trade
            </button>
          </Link>
          <button onClick={() => setTradeModal(false)} className={style.btn}>
            Anulare
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default ItemPage;
