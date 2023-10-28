import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import { ItemsContext } from "../context/ItemsContext";
import style from "../styles/ItemPage.module.css";
function ItemPage() {
  const { user, setUser } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);

  const { idItem } = useParams();
  const item = items.find((i) => {
    return i.id === Number(idItem);
  });
  const [tradeModal, setTradeModal] = useState(false);
  const handleTrade = () => {
    setTradeModal(true);
  };

  return (
    <div className={style.mainConatiner}>
      <div>
        <h1>{item.denumire}</h1>
        <img src={item.imagine} alt={item.denumire} />
      </div>
      <div>
        <div>LOCATION:{item.locatie}</div>
        <div>{item.descriere}</div>
      </div>
      <button onClick={handleTrade}>Trade</button>

      <Dialog visible={tradeModal} onHide={() => setTradeModal(false)}>
        <h1>Choose the items you want to trade</h1>
        {user.items.map((i) => {
          if (i.status === "disponibil") {
            return <Card item={i}></Card>;
          }
        })}
        <div>
          <Link to="/">
            <button
              onClick={() => {
                setTradeModal(false);
              }}
            >
              Send trade
            </button>
          </Link>
          <button onClick={() => setTradeModal(false)}>Anulare</button>
        </div>
      </Dialog>
    </div>
  );
}

export default ItemPage;
